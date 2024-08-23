<svelte:head>
  <title>麻雀点数計算 - ホーム</title>
</svelte:head>

<div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
  <div
    class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
  >
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <div
          class="h-48 w-full object-cover md:w-48 bg-blue-500 flex items-center justify-center"
        >
          <!-- Simple home icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-24 w-24 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        >
          麻雀点数計算
        </div>
        <h1 class="block mt-1 text-lg leading-tight font-medium text-black">
          点数計算ツール
        </h1>
        <p class="mt-2 text-gray-500">
          簡単に素早く麻雀の点数を計算できます。ハンスウ計算とフースウ計算の2つのオプションがあります。
        </p>
        <div class="mt-4 space-y-4">
          <a
            href="/Point-Hansuu"
            class="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out flex items-center"
          >
            <!-- Simple calculator icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
              <line x1="8" y1="6" x2="16" y2="6"></line>
              <line x1="8" y1="10" x2="16" y2="10"></line>
              <line x1="8" y1="14" x2="16" y2="14"></line>
              <line x1="8" y1="18" x2="16" y2="18"></line>
            </svg>
            翻数計算
          </a>
          <a
            href="/Point-Fusuu"
            class="block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out flex items-center"
          >
            <!-- Simple calculator icon (reused) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
              <line x1="8" y1="6" x2="16" y2="6"></line>
              <line x1="8" y1="10" x2="16" y2="10"></line>
              <line x1="8" y1="14" x2="16" y2="14"></line>
              <line x1="8" y1="18" x2="16" y2="18"></line>
            </svg>
            符数計算
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
