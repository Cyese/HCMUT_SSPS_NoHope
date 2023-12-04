## API List
### Request, input and output
1. #### POST /auth/login
    ```js
    input : { ID: MSSV, password: password},
    output : {
        UserID: user.UserID,
        name: user.Name,
        PaperLeft: user.PaperLeft,
        TotalUsed: user.TotalUsed,
        BirthDate: user.Birthdate,
        email: user.Email,
        contactNumber: user.ContactNumber
    }
    ```
1. #### GET /user/
    ```js
    input: { UserID: MSSV },
    output:  {
        UserID: UserID,
        name: Name,
        PaperLeft: PaperLeft,
        TotalUsed: TotalUsed,
        BirthDate: Birthdate,
        email: Email,
        contactNumber: ContactNumber
    }
    ```
1. #### GET /user/getLog
    ```js 
    input : { UserID: MSSV },
    output : [Logs] // Refer to models/log.js 
    ```
1. #### POST /user/print
    ```js
    input : {
        id: MSSV,
        printer_id: Hardcoded,
        filem_name: UserInput,
        file_page: from file_name
    },
    output : {
        status : 201
    }
    ```
1. #### GET /spso/
    ```js
    input : null,
    output: {
        count: count, // Total print entries this month
        totalPrintedPaper : sumOfPaper // Total amount of papers printed this month
    }
    ```
1. #### GET /spso/printerHistory
    ```js
    input : { location : Location }// Of the printer
    output : { PrinterID => [Logs] } // A map of Printer ID to list of Logs printed by that Printer     
    ```