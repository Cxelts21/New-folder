const app =  document.getElementById("app");

blogs.foreach((blog) => {
    app.insertAdjacentHTML(
        "beforeend",
        `<div
        class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
    >
        <a href=${blog.website} class="block">
            <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src="${blog.image}"
            />
        </a>
        <div
            class="${blog.color} flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block"
        >
            <span>${blog.category}</span>
        </div>
        <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
            <a href="#_">${blog.title}</a>
        </h2>
        <p class="text-sm text-gray-500">
        ${blog.description}
        </p>
        <p class="pt-2 text-xs font-medium">
            <a href="#_" class="mr-1 underline">${blog.author}</a> ·
            <span class="mx-1">${blog.date}</span> ·
            <span class="mx-1 text-gray-600">${blog.read_time}</span>
        </p>
    </div>`
    )
})