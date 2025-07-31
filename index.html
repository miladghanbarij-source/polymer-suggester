<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ابزار پیشنهاد مواد پلیمری پارت پلاست</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Vazirmatn', sans-serif;
        }
        .loader {
            border: 5px solid #f3f3f3;
            border-top: 5px solid #16a34a; /* Green color for loader */
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .suggestion-card {
            background-color: #ffffff;
            transition: box-shadow 0.3s ease-in-out;
        }
        .suggestion-card:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        #output h2 {
            font-size: 1.25rem; /* text-xl */
            font-weight: 700; /* font-bold */
            color: #1e3a8a; /* text-blue-900 */
            border-bottom: 2px solid #dbeafe; /* border-blue-100 */
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }
        #output h3 {
            font-size: 1.1rem; /* text-lg */
            font-weight: 600; /* font-semibold */
            color: #1f2937; /* text-gray-800 */
            margin-top: 1.25rem; /* mt-5 */
            margin-bottom: 0.5rem; /* mb-2 */
        }
        #output p {
            color: #4b5563; /* text-gray-600 */
            text-align: justify;
        }
    </style>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-4 md:p-8 max-w-3xl">
        <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div class="text-center mb-6">
                <div class="flex justify-center items-center gap-4">
                    <h1 class="text-2xl md:text-3xl font-bold text-indigo-900">ابزار هوشمند پیشنهاد مواد پلیمری</h1>
                    <a href="https://partplast.com" target="_blank" rel="noopener noreferrer" class="text-sm bg-indigo-100 text-indigo-800 font-bold py-1 px-3 rounded-full hover:bg-indigo-200 transition-colors">پارت پلاست</a>
                </div>
                <p class="text-gray-600 mt-2">نام قطعه مورد نظر خود را وارد کنید تا بهترین مواد پلاستیکی برای ساخت آن را به شما معرفی کنیم.</p>
            </div>

            <!-- بخش ورودی کاربر -->
            <div class="flex flex-col sm:flex-row gap-3 mb-6">
                <input type="text" id="part-input" placeholder="مثلاً: چراغ جلو خودرو، سپر، بدنه جاروبرقی..." class="flex-grow p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition">
                <button id="search-button" class="bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-800 transition-colors duration-300 shadow-md">
                    جستجو کن
                </button>
            </div>

            <!-- بخش نمایش نتایج -->
            <div id="result-container" class="relative bg-gray-50 p-6 rounded-lg border border-gray-200 min-h-[150px]">
                <button id="download-csv-button" class="hidden absolute top-4 left-4 bg-gray-200 text-gray-700 text-xs font-bold py-2 px-3 rounded-lg hover:bg-gray-300 transition-colors">دانلود CSV</button>
                <div id="placeholder" class="text-center text-gray-500 pt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2.25 2.25 0 00-2.242-2.242H6.812a2.25 2.25 0 00-2.242 2.242v.002a2.25 2.25 0 002.242 2.242h10.374a2.25 2.25 0 002.242-2.242v-.002z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.375 13.125L12 16.5l-3.375-3.375" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v9.75m0 0l-3.375 3.375M12 12.75l3.375 3.375" />
                    </svg>
                    <p class="mt-2">نتایج جستجو در اینجا نمایش داده می‌شود.</p>
                </div>
                <div id="loader" class="hidden justify-center items-center">
                    <div class="loader"></div>
                    <p id="loader-text" class="mr-4 text-gray-600"></p>
                </div>
                <div id="output" class="text-gray-800 leading-loose space-y-6"></div>
                 <div id="error-message" class="hidden text-center text-red-500">
                    <p>متاسفانه مشکلی در ارتباط با سرویس پیش آمد. لطفاً دوباره تلاش کنید.</p>
                </div>
            </div>
        </div>
        <footer class="text-center text-gray-500 mt-6 text-sm">
            <p><a href="https://lockposht.com" target="_blank" rel="noopener noreferrer" class="hover:underline">توسعه داده شده توسط لاک پشت</a></p>
        </footer>
    </div>

    <script>
        const searchButton = document.getElementById('search-button');
        const partInput = document.getElementById('part-input');
        const downloadCsvButton = document.getElementById('download-csv-button');
        const placeholder = document.getElementById('placeholder');
        const loader = document.getElementById('loader');
        const loaderText = document.getElementById('loader-text');
        const output = document.getElementById('output');
        const errorMessage = document.getElementById('error-message');

        function downloadCSV() {
            // This function remains unchanged.
            const outputDiv = document.getElementById('output');
            if (!outputDiv.innerHTML.trim()) {
                // We are using a custom modal/alert now, but for simplicity, we keep the old alert here.
                // In a real app, replace this with a styled modal.
                alert('ابتدا یک جستجو انجام دهید تا داده‌ای برای دانلود وجود داشته باشد.');
                return;
            }

            const headers = [
                "عنوان پیشنهاد", "قیمت حدودی", "دلایل انتخاب (مزایا)",
                "گریدهای رایج و تجاری", "معایب احتمالی"
            ];
            let csvRows = [headers.join(',')];
            const suggestionCards = outputDiv.querySelectorAll('.suggestion-card');
            
            suggestionCards.forEach(card => {
                const title = card.querySelector('h2').textContent.trim();
                const priceElement = card.querySelector('p.font-semibold');
                const price = priceElement ? priceElement.textContent.replace('قیمت حدودی:', '').trim() : 'N/A';
                
                const descriptions = Array.from(card.querySelectorAll('h3 + p')).map(p => p.textContent.trim());
                const reasons = descriptions[0] || '';
                const grades = descriptions[1] || '';
                const drawbacks = descriptions[2] || '';
                
                const escapeCsvField = (field) => `"${(field || '').replace(/"/g, '""')}"`;

                csvRows.push([
                    escapeCsvField(title), escapeCsvField(price),
                    escapeCsvField(reasons), escapeCsvField(grades),
                    escapeCsvField(drawbacks)
                ].join(','));
            });

            const csvString = csvRows.join('\r\n');
            const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
            const blob = new Blob([bom, csvString], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", `پیشنهاد_مواد_پلیمری.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        async function getMaterialSuggestion(partName) {
            loader.style.display = 'flex';
            placeholder.style.display = 'none';
            downloadCsvButton.classList.add('hidden');
            output.innerHTML = '';
            errorMessage.style.display = 'none';

            // Caching logic remains the same
            const dbKey = `polymer_db_v3_${partName.toLowerCase().trim()}`;
            const cachedResult = localStorage.getItem(dbKey);

            if (cachedResult) {
                loaderText.textContent = 'نتیجه از حافظه محلی بازیابی شد...';
                setTimeout(() => {
                    output.innerHTML = cachedResult;
                    downloadCsvButton.classList.remove('hidden');
                    loader.style.display = 'none';
                }, 500);
                return;
            }

            loaderText.textContent = 'در حال پردازش و یافتن بهترین مواد...';
            
            // --- KEY CHANGE IS HERE ---
            // Instead of calling Google, we call our own API endpoint.
            const apiUrl = '/api/getSuggestion';

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    // We send the partName in the body of the request.
                    body: JSON.stringify({ partName: partName }) 
                });

                if (!response.ok) {
                    // This will catch errors from our own server (e.g., 500 Internal Server Error)
                    throw new Error(`Server error! status: ${response.status}`);
                }

                const result = await response.json();
                
                if (result.suggestion) {
                    const htmlText = result.suggestion;
                    localStorage.setItem(dbKey, htmlText); // Cache the new result
                    output.innerHTML = htmlText;
                    downloadCsvButton.classList.remove('hidden');
                } else {
                    // This handles cases where our server returns a success code but no suggestion text.
                    throw new Error("پاسخ نامعتبر از سرویس دریافت شد.");
                }

            } catch (error) {
                console.error('Error:', error);
                errorMessage.innerHTML = "<p>متاسفانه مشکلی در ارتباط با سرویس پیش آمد. لطفاً دوباره تلاش کنید.</p>"
                errorMessage.style.display = 'block';
            } finally {
                loader.style.display = 'none';
            }
        }

        searchButton.addEventListener('click', () => {
            const partName = partInput.value.trim();
            if (partName) {
                getMaterialSuggestion(partName);
            } else {
                partInput.classList.add('border-red-500');
                partInput.focus();
                setTimeout(() => partInput.classList.remove('border-red-500'), 2000);
            }
        });

        partInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                searchButton.click();
            }
        });

        downloadCsvButton.addEventListener('click', downloadCSV);
    </script>
</body>
</html>
