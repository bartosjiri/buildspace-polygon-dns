# Buildspace: Build your own domain service on a Polygon L2

A repository for the [Buildspace](https://buildspace.so)'s *"[Build your own domain service on a Polygon L2 in a weekend](https://app.buildspace.so/projects/CO1f8c72fd-67a3-4f99-90b8-79879c5da1eb)"* project.

## Debriefing

During the project, the following tasks have been accomplished:
- Deploy a custom domain contract ([Polygonscan link](https://mumbai.polygonscan.com/address/0xe29C1D263e8A14060C1A1d760F224504Bb4eE9d4))
- Build and deploy a dapp for domain minting ([Website link](https://buildspace-dns-rich.netlify.app/))

<hr />

## Requirements

- [Node.js](https://nodejs.org/en/)

## Development

#### Blockchain scripts

1. Navigate to the `_contract` folder and install project dependencies:
	```
    npm install
    ```
2. Copy the `.env.example` file as `.env` and provide values for all required fields.
3. Execute the deployment script:
	```
    npx hardhat run scripts/deploy.js --network mumbai
    ```

#### Frontend client


1. Install project dependencies:
	```
    npm install
    ```
2. Copy the `.env.example` file as `.env` and provide values for all required fields.
3. Start the application in development mode:
	```
    npm run start
    ```

## Deployment

1. If not done during development, install project dependencies:
	```
    npm install
    ```
2. Generate the production build of the application:
	```
    npm run build
    ```
3. Using the web server of your preference, publish the contents of the generated `build` directory.

## Resources
- [Buildspace: Build your own domain service on a Polygon L2 in a weekend](https://app.buildspace.so/projects/CO1f8c72fd-67a3-4f99-90b8-79879c5da1eb)
- [Alchemy](https://www.alchemy.com/)