import React from 'react';
import './StyleForPrintForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPrint, faEye, faFile } from '@fortawesome/free-solid-svg-icons';

function Print() {
  return (
    <div className="main">
        <div id="choosePrint_ChooseFile_DeleteFile_ButtonGroup"> 
            <button id="choosePrint" > <FontAwesomeIcon icon={faPrint}/> Choose print </button>
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
            <button id="deleteFile"> <FontAwesomeIcon icon={faTrash} /> Delete file</button>
        </div>
        <div id="drop_zone" style={{width: '1005px', height:'405px', padding:'10px', border:'1px solid #aaaaaa'}} draggable="true">
            Drop files here <br/>
        </div>
        <div id="previewAndPrintButtonGroup"> 
            <button id = "preview"> <FontAwesomeIcon icon={faEye}/> Preview</button>
            <button id = "print"> <FontAwesomeIcon icon={faPrint}/> Print</button>  
        </div>
    </div>
);
}

export default Print;
