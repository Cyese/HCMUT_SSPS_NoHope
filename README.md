# HCMUT_SPSS_NoHope
## ABOUT THIS PROJECT
This project aims at providing a solution for HCMUT's student needs for printing documents for studying and researching purposed, including:
* Printing documents for students and learners at HCMUT.
* Managing printing activity for staffs.
* Reporting and summarizing on basic on the system usage.
## Built with
* [NodeJS](https://nodejs.org/en/): version 22.04
* [MongoDB](https://www.mongodb.com/): version 2.0.2
* [React](https://react.dev/): version 18.2.0
## Getting started
### Installation
1. Install NodeJS and MongoDB from the link above.
1. Clone this repository:
    ```sh 
    git clone https://github.com/Cyese/HCMUT_SSPS_NoHope
    ```
1. Install dependencies:
    * Window ***command prompt*** 
    ```cmd
    init.cmd
    ```
    * UNIX based system ***bash/zsh***
    ```bash
    ./init.sh
    ```
1. Import data into your local database:
    #### Using MongoDB compass
    1. Open MongoDB compass
    1. Create a new **Connection** with this URI
    ```link
    mongodb://localhost:27017
    ```
    3. Create a new database name **hcmut_spss_dev**
    4. Click on **import data** and choose *.json* file in 
    #### Using Mongossh
    ***To be implemented***
### Usage
1. Start server app:
    ```sh
    npm start
    ```
2. Create another prompt and run:
    ```cmd
    cd source\views\ && npm start 
    ```
    or 
    ```sh
    cd source/views/ && npm start
    ```
    #### You can launch the app on 
    ```url
    localhost:3000
    ```
3. If you have root permission on bash you can also use this command to run it in default HTTP port
    ```bash
    cd source/views/ && sudo npm run deploy 
    ```
    #### Which make your app can be access through
    ```url
    localhost
    ```
4. Default user credential:
    #### StudentID: ```2181367```
    #### Password: ```123456```
5. SPSO login: *this authentication have not be implemented, please use below credintal*
    #### StudentID: ```1```
    #### Password: ```Any```
## Related Document
* [Report](https://www.overleaf.com/read/qffzghfpxbwp#7382a2): Written in Vietnamese
* [Diagram](https://drive.google.com/file/d/1jbRXG59iD57gZ3vsaZh-R-1fB8YuCRUg/view?usp=sharing): Can be view from draw.io
* [Database](./docs/database)
* [Task distribution](./docs/other/Task.xlsx)
* [How to use](./docs/other/guide.pdf)
## Contact us 
* [Discord](https://discord.gg/KM9cYgjG)
* [Github/Cyese](https://github.com/Cyese)