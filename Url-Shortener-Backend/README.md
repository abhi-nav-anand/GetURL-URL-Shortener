# URL-Shortener-Backend

A **URL Shortener Backend** developed using **MongoDB**, **Express JS** and **Node JS** which is used to shorten the **Long URL** into **Shorten URL**. It provides **REST API** endpoints to interact with.
![mern](https://github.com/animesh-anand-dev/Url-Shortener-Backend/assets/64230897/5d0728e2-eaf2-4377-acbb-d737ae707692)

## Demo

[Full Stack Project with **MongoDB**, **Express JS**, **Node JS** and React JS where this project is used as a backend.](https://geturl.codelabs.tech/)

## Screenshots

![screenshot-api](https://user-images.githubusercontent.com/64230897/222185793-98824a38-fd67-438e-859c-da436ee0b909.png)

## Run Locally

1. Clone the project
```
 git clone https://github.com/animesh-anand-dev/Url-Shortener-Backend.git
```
2. Open **[VS Code](https://code.visualstudio.com/)** or any other IDE of your choice open the **Url-Shortener-Backend** folder.

3. In terminal chnage directory to the **Url-Shortener-Backend** folder.
 -   For Windows
    ```
      cd Study-Notion-Backend
    ```
4. Create and Setup account for [MongoDB Atlas](https://www.mongodb.com/cloud) on [MongoDB Cloud](https://www.mongodb.com/cloud).

5. Create User and Password for the **Database**.
6. Create Database
7. Keep changes in .env file and rename it.
8. If you don't have Node on your machine then download [Node](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

9. Now run npm to install the required dependencies.
```
  npm install
```
10. Now start the react app by this command
```
  npm start
```
11. Open your favourite API testing tool like [Postman](https://www.postman.com/) for desktop and [Talend API Tester](https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm?hl=en)
 
😊 Happy Coding 🎉

## API Reference

#### Get all urls 

```
  GET /urls
```
```http
  http://localhost:5000/urls
```

#### Get a url details

```
  GET /${id}/details
```

```http
  http://localhost:5000/random_id/details
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Shorten Url to fetch details|

#### Post a url

```
  POST /urls
```

```http
  http://localhost:5000/urls
```

| Request body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `originalUrl`      | `string` | **Required**. originalUrl of Long URL to create shorten link.|

#### Get request to shorten link which redirects to its original URL

```
  GET /${id}
```

```http
  http://localhost:5000/random_id
```

## Author

<p>
  <img width="50"align="center" src="https://user-images.githubusercontent.com/64230897/222225914-ed0f7818-df07-467c-84a8-865252cdfa8a.jpg" alt="animesh-anand"/><b align="right"> Animesh Anand </b>
</p> 

* Website: https://animeshanand.web.app/
* Github: [@animesh-anand-dev](https://github.com/animesh-anand-dev)
* LinkedIn: https://linkedin.com/animeshanand

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Animesh Anand](https://github.com/animesh-anand-dev).<br />
This project is [MIT License](https://github.com/animesh-anand-dev/URL-Shortener-Microservice/blob/master/LICENSE) licensed.

