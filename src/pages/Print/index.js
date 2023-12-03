import React from 'react';
import './StyleForPrintForm.css';
function Print() {
  return (
    <div className="main">
        <button id="choosePrint" >Choose print</button>
        <div id="myList" style={{display: 'none'}}>
            <select id="mySelect">
                <option value="1">Mục 1</option>
                <option value="2">Mục 2</option>
                <option value="3">Mục 3</option>
                <option value="4">Mục 4</option>
                <option value="5">Mục 5</option>
            </select>
            <button >Close</button>
        </div>
        <input type="file" id="myfile"></input>
        <button id="deleteFile">Delete file</button>
        <div id="drop_zone" style={{width: '1005px', height:'405px', padding:'10px', border:'1px solid #aaaaaa'}} draggable="true">
            Drop files here <br/>
        </div>
        <button id = "preview">Preview</button>
        <button id = "print">Print</button>  
    </div>
);
}

export default Print;
