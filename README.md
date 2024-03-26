# File-Based Routing with Authentication, Authorization, and Casdoor Integration (Bun & Vite)

This project showcases a file-based routing architecture for a web application leveraging Casdoor for user authentication and authorization. It's implemented in TypeScript using React.js, TanStack Query, TanStack Router, and Bun for dependency management. The development server utilizes Vite's efficiency.

**Key Features:**

- **Simple and Scalable Routing:** Manage routes using file system directories and files.
- **Seamless Casdoor Integration:** Integrate Casdoor for user login and authorization functionalities.
- **Clean Architecture:** Maintain clear separation of concerns for domain logic, application logic, and presentation.
- **Fast Bun Integration:** Enjoy Bun's speed for dependency installation.
- **Efficient Vite Development Server:** Benefit from Vite's fast build times and hot module replacement (HMR) during development.

**Important Security Note:**

- While some Casdoor versions might have a default admin account with username "admin" and password "123," **never** use these credentials in production environments. Always set strong, unique passwords and consider multi-factor authentication (MFA) for enhanced security.

**Casdoor Organization and Application Setup:**

1. **Login to Casdoor:** Open [http://localhost:8000](http://localhost:8000) in your browser and log in or create a new account.
2. **Create an Organization:** Navigate to the "Organizations" section and create a new organization (e.g., "File-Based-Routing-Demo").
3. **Create an Application:** Within your organization, create a new application (e.g., "File-Based-Routing-App"). Fill out the details, including redirect URI (matching your application's configuration).
4. **Retrieve Application Details:** Note down the Client ID and Server URL displayed on the application's details page.
5. **Configure Project Environment:** Create a `.env` file in your project's root directory and add the required environment variables:

```plaintext
VITE_SERVER_URL=<Your Casdoor Server URL>
VITE_CLIENT_ID=<Your Casdoor Client ID>
VITE_ORG_NAME=<Your Casdoor Organization Name>
VITE_APP_NAME=<Your Casdoor Application Name>
VITE_REDIRECT_PATH=<Your Casdoor Redirect Path>
```

**Creating Test Users (for Testing Only):**

- It's recommended to create a few test users within Casdoor for initial testing purposes. You can achieve this through the Casdoor user management interface.

**Running the Application:**

1. Start the development server with Vite:

   ```bash
   bun dev
   ```

2. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the application.

**Contributing:**

I welcome contributions! Feel free to open issues or submit pull requests.

**Additional Notes:**

- Refer to the Casdoor documentation for in-depth information on user creation, role management, and API usage.

## Starting the Casdoor Docker Container

To start the Casdoor Docker container, run the following command:

```bash
docker volume create casdoorData
```

After creating the Docker volume, you can start the Casdoor Docker container with the following command:

```bash
docker run -p 8000:8000 -v casdoorData:/var/lib/mysql casbin/casdoor-all-in-one
```

This command will start the Casdoor container with the required ports mapped and a volume mounted for persistent data storage.

## Additional References

- [Casdoor Documentation](https://casdoor.org)
- [React.js Documentation](https://react.dev)
- [TanStack Query Documentation](https://tanstack.com/query)
- [TanStack Router Documentation](https://tanstack.com/router)
- [Vite Documentation](https://vitejs.dev)
- [Bun Documentation](https://bun.sh/docs)
