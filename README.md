<p align="center">
  <img src="https://res.cloudinary.com/runyshark1/image/upload/v1707709938/yy0_oae3vv.gif" width="200" alt="Aether API](https://res.cloudinary.com/runyshark1/image/upload/v1707709938/yy0_oae3vv.gif)" />
</p>

# blog-clean-architecture React Next-14

## How to Run 🚀

Ensure you have **Node.js version 20 or later** installed for this project. This guide assumes you're using Node.js 20.

### Step 1: Install Dependencies

Begin by installing the project dependencies. Open your terminal and execute:

```bash
$ npm install
```

### Step 2: Docker Requirement

This project utilizes Docker for database services. Ensure Docker and Docker Desktop are installed on your machine.

To start your local database server with Docker, run:

```bash
$ docker-compose up -d
```

### Step 3: Environment Variables Setup

Configure your environment variables for the project. Below is an example .env file:

```bash
NEXT_PUBLIC_NODE_ENV=development
DATABASE_URL="mysql://root:root@localhost:3306/mydb"
```

### Step 4: Prisma Setup for Migrations

This project uses Prisma as an ORM to efficiently manage the connection with MySQL. To prepare your database and generate the necessary Prisma files, follow these steps in your terminal:

##### Generate Prisma Migrations:

This command prepares your database for the project by creating necessary tables and structures.

```bash
npx prisma migrate dev
```

##### Generate Prisma Client:

After the migrations, generate the Prisma client. This facilitates database operations within your application.

```bash
npx prisma generate
```

### Step 5: Initial Database Seeding

To start your project with test data, run the following command. This will allow you to work with example data and verify the correct functioning of the developed features.

```bash
npm run seed
```

### Step 6: Start the Project

Now that everything is set up, it's time to get your project up and running. Execute the following command to start the development server. This will allow you to access your application and immediately start working on it.

```bash
npm run dev
```

## Project Overview 📘

In the crafting of this blog with Next.js 14, I've emphasized establishing a clean and sustainable architecture, integrating an array of advanced design patterns while adhering to the pinnacle of programming best practices. My steadfast commitment to the SOLID principles has rendered the codebase both modular and scalable, with ease of maintenance as a cornerstone. The methodologies and patterns employed are of remarkable versatility, suitable for an extensive spectrum of software applications ranging from straightforward scripts to intricate frontend and backend developments. Below are the pivotal elements of the architecture I've meticulously devised:

#### Domain-Driven Design (DDD)

The foundation of the application's architecture is rooted in DDD, enabling a system structure that mirrors the complexities and confines of the business domain with fidelity. This approach significantly enhances system scalability and adaptability.

#### Atomic Design

In developing React components, I've embraced the atomic design methodology, facilitating a cohesive and reusable user interface development that enriches both the developer and user experience.

#### Redux Pattern

Redux has been integrated for comprehensive state management, simplifying application state manipulation and bolstering data flow predictability and maintainability.

#### Redux + LocalStorage

A hybrid solution combining Redux with LocalStorage has been implemented to optimize user experience and ensure application functionality offline. This strategy allows for the rehydration of slice states, ensuring a smooth and efficient user interaction.

#### Adapter Pattern

This pattern has been applied across all integrations with external dependencies, allowing for the abstraction from specific implementations. Coupled with DDD, it aids in the seamless substitution or modification of libraries and external services with minimal impact on the base code.

#### Use Cases

Business logic has been centralized within specific use cases, facilitating the clear definition of system operations and simplifying both maintenance and scalability.

#### Data Transfer Objects (DTOs)

DTOs have been crafted to map and validate incoming data, ensuring the processing of only valid and relevant data, thereby enhancing application integrity and security.

#### Entities

I've introduced an abstraction layer between the database and the backend to minimize the impact of database schema changes on the system, promoting code stability and flexibility.

#### Entities and Mappers

An abstraction layer between the database and the backend, along with data mappers, has been introduced. This minimizes the impact of database schema changes, promoting greater code stability and flexibility.

#### Repositories

This abstraction layer provides me with the flexibility to easily switch database technologies, supporting agile technological evolution.

#### Dependency Injection

To avoid hidden couplings and enhance the system's modularity, I've implemented dependency injection, which improves the testability of the code.

These elements are the backbone of the backend I've developed, ensuring a well-structured system that is both powerful and easy to evolve. With this approach, I am committed to software development excellence, prioritizing quality, scalability, and sustainability of the project.

- Author - [Sergio Dario Moreno](https://github.com/RunyShark)
