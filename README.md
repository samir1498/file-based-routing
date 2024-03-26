# File-Based Routing Project with AuthN and AuthZ using Casdoor

This project is a demonstration of file-based routing architecture for a web application with authentication and authorization features, implemented in TypeScript using React.js, React Query, and TanStack Router.

## Introduction

File-based routing is an architectural pattern where routes are defined and managed using file system directories and files instead of a centralized routing configuration. It offers simplicity, clarity, and scalability to web applications.

## Features

- **File-Based Routing**: Routes are defined as files in the `src/routes` directory, simplifying the organization and management of routes.
- **Authentication with Casdoor**: Integration with [Casdoor](https://casdoor.org/) for user authentication and authorization.
- **Clean Architecture**: Separation of concerns with clear boundaries between domain logic, application logic, and presentation.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [Docker](https://www.docker.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/samir1498/file-based-routing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd file-based-routing
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Create a Docker volume for Casdoor data:

   ```bash
   docker volume create casdoorData
   ```

2. Start the Casdoor Docker container:

   ```bash
   docker run -p 8000:8000 -v casdoorData:/var/lib/mysql casbin/casdoor-all-in-one
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the application.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.
