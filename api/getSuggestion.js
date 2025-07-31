// Filename: api/getSuggestion.js

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { partName } = request.body;

  if (!partName) {
    return response.status(400).json({ message: 'Missing partName in request' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
      console.error("GEMINI_API_KEY is not set on the server.");
      return response.status(500).json({ message: 'API Key is not configured on the server.' });
  }

  // The prompt is updated to generate search links instead of direct product links to prevent 404 errors.
  const prompt = `
      به عنوان یک متخصص و مهندس علم مواد با دسترسی به اطلاعات قیمت‌گذاری روز، برای قطعه ی "${partName}" دو پیشنهاد ماده پلیمری ارائه بده.
      پاسخ را به زبان فارسی و با فرمت HTML ارائه بده. ساختار پاسخ باید دقیقاً به شکل زیر باشد و از تگ‌های HTML مشخص شده استفاده کن:

      <div class="suggestion-card mb-6 p-4 border border-gray-200 rounded-lg">
          <h2><strong>پیشنهاد اول: [نام ماده]</strong></h2>
          <p class="font-semibold text-gray-700 mt-2"><strong>قیمت حدودی:</strong> [قیمت حدودی به تومان یا دلار به ازای هر کیلوگرم]</p>
          <h3>۱. دلایل انتخاب (مزایا)</h3>
          <p>[توضیح کامل دلایل انتخاب ماده بر اساس خواصی مثل مقاومت حرارتی، شفافیت، ضربه‌پذیری و غیره.]</p>
          <h3>۲. گریدهای رایج و تجاری</h3>
          <p>[چند گرید معروف یا استاندارد که برای این کاربرد استفاده می‌شود را نام ببر.]</p>
          <h3>۳. معایب احتمالی</h3>
          <p>[به صورت خلاصه به یک یا دو مورد از نقاط ضعف ماده هم اشاره کن.]</p>
      </div>
      <div class="suggestion-card p-4 border border-gray-200 rounded-lg">
          <h2><strong>پیشنهاد دوم: [نام ماده جایگزین]</strong></h2>
          <p class="font-semibold text-gray-700 mt-2"><strong>قیمت حدودی:</strong> [قیمت حدودی به تومان یا دلار به ازای هر کیلوگرم]</p>
          <h3>۱. دلایل انتخاب (مزایا)</h3>
          <p>[توضیح کامل دلایل انتخاب ماده بر اساس خواصی مثل مقاومت حرارتی، شفافیت، ضربه‌پذیری و غیره.]</p>
          <h3>۲. گریدهای رایج و تجاری</h3>
          <p>[چند گرید معروف یا استاندارد که برای این کاربرد استفاده می‌شود را نام ببر.]</p>
          <h3>۳. معایب احتمالی</h3>
          <p>[به صورت خلاصه به یک یا دو مورد از نقاط ضعف ماده هم اشاره کن.]</p>
      </div>

      ---
      
      بعد از ارائه دو پیشنهاد بالا، یک بخش جدید با فرمت HTML زیر اضافه کن. در این بخش، بر اساس نام مواد پیشنهادی (مثلا پلی پروپیلن)، لینک جستجو برای یافتن آن محصولات در سایت partplast.com ایجاد کن. لینک‌ها باید دقیقا به صفحه جستجوی سایت با فرمت "https://partplast.com/shop/?s=[نام ماده]" باشند.

      <div class="related-products mt-8 pt-6 border-t-2 border-gray-200">
          <h3 class="text-xl font-bold text-indigo-800 mb-4">جستجوی محصولات در پارت پلاست</h3>
          <p class="text-gray-600 mb-4">برای یافتن گریدهای موجود از مواد پیشنهادی در فروشگاه، روی لینک‌های زیر کلیک کنید:</p>
          <ul class="list-disc list-inside space-y-2">
              <li><a href="https://partplast.com/shop/?s=[نام ماده اول]" target="_blank" class="text-green-700 hover:underline">جستجوی محصولات <strong>[نام ماده اول]</strong> در فروشگاه</a></li>
              <li><a href="https://partplast.com/shop/?s=[نام ماده دوم]" target="_blank" class="text-green-700 hover:underline">جستجوی محصولات <strong>[نام ماده دوم]</strong> در فروشگاه</a></li>
          </ul>
      </div>
  `;

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
  };

  try {
    const googleResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!googleResponse.ok) {
        const errorBody = await googleResponse.text();
        console.error('Error from Google API:', googleResponse.status, errorBody);
        throw new Error(`Google API responded with status: ${googleResponse.status}`);
    }

    const result = await googleResponse.json();
    const htmlText = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (htmlText) {
      return response.status(200).json({ suggestion: htmlText });
    } else {
      console.error("Invalid response structure from Google:", result);
      throw new Error('Invalid response structure from Google API.');
    }

  } catch (error) {
    console.error('Internal Server Error:', error);
    return response.status(500).json({ message: 'An error occurred while fetching data.' });
  }
}
