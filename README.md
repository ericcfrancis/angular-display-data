# Angular Display Data

An Angular application that displays Malaysian government data (MSIC and MCOICOP) from official APIs in paginated tables.

## Features
- Fetches real-time data from Malaysia government APIs
- Displays MSIC (industrial classification) data in organized tables
- Shows MCOICOP (consumer price index) data with filtering
- Responsive Bootstrap 5 design
- Built with Angular 19

## Prerequisites
- Node.js v18+
- npm v9+ or yarn
- Angular CLI v19+

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/angular-display-data.git
   cd angular-display-data

2. Install dependencies:
    ```bash
    npm install

3. Start the development server:
    ```bash
    ng serve

4. Access the application at:
    ```bash
    http://localhost:4200/

## API Endpoints
    
1. MSIC Data: https://api.data.gov.my/data-catalogue/?id=msic&limit=30
2. MCOICOP Data: https://api.data.gov.my/data-catalogue/?id=mcoicop&limit=30

## Development
1. First-time setup:

    ```bash
    npm install -g @angular/cli

2. Key dependencies:

    ```bash
    npm install bootstrap @popperjs/core

## Technical Stack
1. Angular 19
2. Bootstrap 5
3. RxJS 7
4. TypeScript 5

## License
MIT Licensed