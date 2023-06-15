# Admission criteria

- Repositories `goit-js-hw-13-image-finder' have been created.
- When submitting homework, there are two links for each project: to the source
files and a working page on GitHub pages.
- When visiting the work page (GitHub pages) of the task, there are no errors and
warnings in the console
- Names of variables and functions are clear, descriptive
- The project is built using 'Webpack`
- The code is formatted with `Prettier`
- Add minimal styling
- There is an `ApiService' file.js` with default export of the object responsible for logic
  HTTP API requests

## Task - image search

Write a small application for searching and viewing images by keyword

## Pixabay API Instructions

For HTTP requests, use public
[Pixabay API](https://pixabay.com/api/docs/). Register and get the key.

URL-request string:

```bash
https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
```

Pixabay API supports pagination, let 12 objects come in the response,
set in the `per_page` parameter. By default, the `page` parameter is `1'. By
each subsequent query increases the `page` by 1, and when searching for a new
keyword, it is necessary to reset its value to `1`.

Each isobarge is described by an object.

```json
{
  "comments": 78,
  "downloads": 63296,
  "favorites": 558,
  "id": 1508613,
  "imageHeight": 2135,
  "imageSize": 1630104,
  "imageWidth": 2894,
  "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
  "likes": 575,
  "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
  "previewHeight": 110,
  "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
  "previewWidth": 150,
  "tags": "cat, animal, cat portrait",
  "type": "photo",
  "user": "cocoparisienne",
  "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
  "user_id": 127419,
  "views": 127450,
  "webformatHeight": 472,
  "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
  "webformatWidth": 640
}
```

Are you interested in the following properties:

- `webformatURL` - link to a small image for a list of cards
- `largeImageURL' - link to a large image (see the item 'advanced')
- `likes' - number of likes
- `views` - number of views
- `comments' - number of comments
- `downloads' - number of downloads

## Search Form

Creates a DOM element of the following structure. You can use templating.

```html
<form class="search-form" id="search-form">
  <input
    type="text"
    name="query"
    autocomplete="off"
    placeholder="Search images..."
  />
</form>
```

## Image Gallery

Creates a DOM element of the following structure.

```html
<ul class="gallery">
<!-- List <li> with image cards -->
</ul>
```

## Image card

Creates a DOM element of the following structure.

```html
<div class="photo-card">
  <img src="" alt="" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      1108
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      320321
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      129
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      176019
    </p>
  </div>
</div>
```

For icons , the following are used
[Material icons](https://google.github.io/material-design-icons/). For their
correct operation, it is enough to add a link to the web font in the HTML file.

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

Or by adding the npm package `material-design-icons` and importing the web font into
`index.js`.

## 'Load more' button

When you click on the `Load more` button, the next batch
of images should be loaded and rendered together with the previous ones.

The page should automatically scroll smoothly after rendering images
to exactly one screen in order to take the user to the beginning of the uploaded
images. Use
[window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo).

## Additional

- You can add a notification plugin, for example
  [pnotify](https://github.com/sciactive/pnotify ), and show notifications on
  result of HTTP requests
- You can add functionality for displaying a large version of an image through
a modal window plugin, for example
  [basicLightbox](https://basiclightbox.electerious.com /), when clicking on
  gallery image
- Instead of the `Load more` button, you can do infinite loading when scrolling
using the `Intersection Observer`.
