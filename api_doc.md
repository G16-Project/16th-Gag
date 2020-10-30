## **16th GAGs API Documentation**
----

    Register new user. 

* **URL**

    /register

* **Method:**

    `POST`

*  **Data Params**

   **Required:**
 
   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```md
    {
        "id": 1,
        "email": "bulba@gmail.com"
    }
    ```
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----
    Log into apps. 

* **URL**

    /login

* **Method:**

    `POST`

*  **Data Params**

   **Required:**
 
   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```md
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJidWxiYUBnbWFpbC5jb20iLCJpYXQiOjE2MDM5Njc1NzV9.IZIgb-6Rxt58pPQuberOrRDC1-IBnT7ug51oTCk0l80"
    }
    ```

* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error : "Wrong email/password!" }`

  * **Code:** 401 <br />
    **Content:** `{ error : "Wrong email/password!" }`

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----
    Get random joke about Chuck Norris. 

* **URL**

    /random

* **Method:**

    `GET`

*  **Data Body**

   **Required:**
 
   `jokes=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```md
    { "jokes": "Chuck Norris doesn't commit susicide, susicide commits him" }
    ```

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----
    Get random joke about Dad Jokes. 

* **URL**

    /dad-jokes

* **Method:**

    `GET`

*  **Data Body**

   **Required:**
 
   `jokes=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```md
    { "jokes": "How many tickles does it take to tickle an octopus? Ten-tickles!" }
    ```

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----
    Get random quote. 

* **URL**

    /favQ

* **Method:**

    `GET`

*  **Data Body**

   **Required:**
 
   `body=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```md
    { "body": "Happiness is like a butterfly: the more you chase it, the more it will elude you, but if you turn your attention to other things, it will come and sit softly on your shoulder." }
    ```

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`