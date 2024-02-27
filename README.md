
The Email Service with Node.js is a versatile and robust solution designed to facilitate seamless sending of emails across various platforms. Built with flexibility and efficiency in mind, this project offers support for multiple email service providers including SendGrid, AWS SES, and custom SMTP configurations. Leveraging Node.js, along with BullQueue for queuing tasks, the service ensures reliable delivery of emails while providing insightful analytics on sent emails.

Key Features:

Multi-Provider Support: The service seamlessly integrates with popular email service providers such as SendGrid, AWS SES, and custom SMTP configurations, offering users the flexibility to choose the provider that best suits their needs.
Custom HTML Templates: Users can easily incorporate their own HTML email templates, allowing for personalized and branded email communications tailored to their specific requirements.
Queue Management: Utilizing BullQueue, the service efficiently manages the queuing of email sending tasks, ensuring smooth and optimized processing even during periods of high traffic or heavy loads.
Insightful Analytics: The service provides detailed insights into the performance of sent emails, including delivery rates, open rates, click-through rates, and more. These analytics empower users to assess the effectiveness of their email campaigns and make informed decisions for future optimizations.
API-Based Functionality: With an API-based architecture, the service offers seamless integration with existing systems and applications, allowing for streamlined communication and automation of email sending processes.
Technologies Used:

Node.js: A powerful JavaScript runtime environment used for building scalable and efficient server-side applications.
Express.js: A minimalist web application framework for Node.js, providing robust features for building RESTful APIs.
BullQueue: A Redis-backed queue library for Node.js, facilitating efficient task queuing and processing.
SendGrid: An email delivery platform used for sending transactional and marketing emails at scale.
AWS SES (Simple Email Service): A cloud-based email sending service provided by Amazon Web Services, offering high deliverability and scalability.
Custom SMTP: Support for configuring and using custom SMTP servers for sending emails, providing users with additional flexibility and control.


# Installation

Node.j v14+  (https://nodejs.org/) 
Redis (https://redis.io/download)
MongoDB (https://www.mongodb.com/)

Install the dependencies and devDependencies

```sh
npm install
``` 
Copy the example env file and make the required configuration changes in the .env file
```sh
cp .env.example .env
```
## Production
Setup  PM2 (https://pm2.keymetrics.io/docs/usage/quick-start/)

## Development

```sh
npm install -g nodemon
npm run dev
```

## Run Test 

```sh
npm run test
```
