class ErrorResponse extends Error {
    constructor(message, codeStatus) {
        super(message);
        this.codeStatus = codeStatus;
    }
}

module.exports = ErrorResponse;

// import React from 'react';

// const ErrorResponse = ({ message, codeStatus }) => {
//   return (
//     <div>
//       <p>{message}</p>
//       <p>Code Status: {codeStatus}</p>
//     </div>
//   );
// };

// export default ErrorResponse;