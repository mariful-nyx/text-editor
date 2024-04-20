import React, {useState, useRef} from "react";

function TextEditor() {

    const [content, setContent] = useState('');
    let [text, setText] = useState('')

    const handleInputChange = (e) => {
      setContent(e.target.value);
    };
  

  
  // To change the font size of selected text
    const fontSizeHandler = (size) => {
  
      document.execCommand('fontSize', false, `${size}px`);
    }
  
  
  // To do bold of selected text
    const handleBoldClick = (e) => {
      e.preventDefault()
      document.execCommand('bold', false, null);
    };
  
  
  // To do italic of selected text
    const handleItalicClick = (e) => {
      e.preventDefault()
      document.execCommand('italic', false, null);
    };
  
  
    // To do underline of selected text
    const handleUnderlineClick = (e) => {
      e.preventDefault()
      document.execCommand('underline', false, null);
    };
  
    
    // To do align left of selected text
    const handleAlignLeft = (e) => {
      e.preventDefault()
      document.execCommand('JustifyLeft', false, null)
    }
  
    // To do align center of selected text
    const handleAlignCenter = (e) => {
      e.preventDefault()
      document.execCommand('JustifyCenter', false, null)
    }
  
    // To do align right of selected text
    const handleAlignRight = (e) => {
      e.preventDefault()
      document.execCommand('JustifyRight', false, null)
    }
  
    // To do justify of selected text
    const handleJustify = (e) => {
      e.preventDefault()
      document.execCommand('JustifyFull', false, null)
    }
  
    // To do Order List of selected text
    const handleOrderedList = (e) => {
      e.preventDefault()
      document.execCommand('insertOrderedList', false, null)
    }
  
    // To do UnOrder List of selected text
    const handleUnorderedList = (e) => {
      e.preventDefault()
      document.execCommand('insertUnorderedList', false, null)
    }
  
  
    const handleSuperSctipt = (e) => {
      e.preventDefault()
      document.execCommand('superscript', false, null)
    }
  
  
    const handleSubscript = (e) => {
      e.preventDefault()
      document.execCommand('subscript', false, null)
    }

    const editorRef = useRef(null);

    const handleButtonClick = () => {
      const elementsInsideDiv = editorRef.current.innerHTML
      setText(elementsInsideDiv)
    };





 
    


    return (
      <div>
        <div className="toolbar">
       
            <select onChange={(e)=>fontSizeHandler(e.target.value)}>
              {Array.from(Array(100), (e, i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
          <button onClick={handleBoldClick}><i class="fa-solid fa-bold "></i></button>
          <button onClick={handleItalicClick}><i class="fa-solid fa-italic"></i></button>
          <button onClick={handleUnderlineClick}><i class="fa-solid fa-underline"></i></button>
          <button onClick={handleAlignLeft}><i class="fa-solid fa-align-left"></i></button>
          <button onClick={handleAlignCenter}><i class="fa-solid fa-align-center"></i></button>
          <button onClick={handleAlignRight}><i class="fa-solid fa-align-right"></i></button>
          
          <button onClick={handleJustify}><i class="fa-solid fa-align-justify"></i></button>
          <button onClick={handleOrderedList}><i class="fa-solid fa-list-ol"></i></button>
          <button onClick={handleUnorderedList}><i class="fa-solid fa-list-ul"></i></button>
          <button onClick={handleSuperSctipt}><i class="fa-solid fa-superscript"></i></button>
          <button onClick={handleSubscript}><i class="fa-solid fa-subscript"></i></button>
          
        </div>
     
        <div
          className="editor"
          role='textbox'
          contentEditable="true"
          value={content}
          dangerouslySetInnerHTML={{ __html: content }}
          onChange={(e)=>handleInputChange(e)}
          ref={editorRef}
          onInput={handleButtonClick}    
        />
        <textarea name="text-content" className="text-content" value={text}></textarea>
      </div>
    );
  }

  export default TextEditor