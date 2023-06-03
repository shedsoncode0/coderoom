import React, { useState, useRef, useEffect } from 'react';
import { Resizable } from 're-resizable';

const Editor = () => {
  // State variables to store the HTML, CSS, and JS code
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const [paneSize, setPaneSize] = useState({ width: 200, height: 200 });

  const handleResize = (event, { size }) => {
    setPaneSize(size);
  };


  // State variables to store the line numbers for each code section
  const [htmlLineNumbers, setHtmlLineNumbers] = useState('');
  const [cssLineNumbers, setCssLineNumbers] = useState('');
  const [jsLineNumbers, setJsLineNumbers] = useState('');

  // Refs to store references to the HTML, CSS, and JS textarea elements
  const htmlTextareaRef = useRef(null);
  const cssTextareaRef = useRef(null);
  const jsTextareaRef = useRef(null);

  // Event handler for HTML code changes
  const handleHtmlChange = (event) => {
    const value = event.target.value;
    setHtml(value);
  };

  // Effect to update the HTML textarea when the HTML code changes
  useEffect(() => {
    const htmlTextarea = htmlTextareaRef.current;
    if (htmlTextarea) {
      htmlTextarea.innerHTML = html;
    }
  }, [html]);

  // Event handler for CSS code changes
  const handleCssChange = (event) => {
    setCss(event.target.value);
  };

  // Event handler for JS code changes
  const handleJsChange = (event) => {
    setJs(event.target.value);
  };

  // Effect to update the line numbers when any code section changes
  useEffect(() => {
    const updateLineNumbers = () => {
      const htmlLineCount = getLineCount(html);
      const cssLineCount = getLineCount(css);
      const jsLineCount = getLineCount(js);

      const htmlLineNumbers = generateLineNumbers(htmlLineCount);
      const cssLineNumbers = generateLineNumbers(cssLineCount);
      const jsLineNumbers = generateLineNumbers(jsLineCount);

      setHtmlLineNumbers(htmlLineNumbers);
      setCssLineNumbers(cssLineNumbers);
      setJsLineNumbers(jsLineNumbers);
    };

    updateLineNumbers();
  }, [html, css, js]);

  // Function to calculate the line count of a given text
  const getLineCount = (text) => {
    return text ? text.split('\n').length : 1;
  };

  // Function to generate line numbers based on the line count
  const generateLineNumbers = (lineCount) => {
    return Array.from(Array(lineCount).keys())
      .map((lineNumber) => lineNumber + 1)
      .join('\n');
  };

  return (
    <div className='app'>
      <div className='editor'>
      <Resizable >

        <div className='pane'>
          <h3>HTML</h3>
          <div className='code-container'>
            <pre className='line-numbers'>{htmlLineNumbers}</pre>
            <textarea
              ref={htmlTextareaRef}
              value={html}
              onChange={handleHtmlChange}
              rows={getLineCount(html)}
            ></textarea>
          </div>
        </div>
      </Resizable>
        <div className='pane'>
          <h3>CSS</h3>
          <div className='code-container'>
            <pre className='line-numbers'>{cssLineNumbers}</pre>
            <textarea
              ref={cssTextareaRef}
              value={css}
              onChange={handleCssChange}
              rows={getLineCount(css)}
            ></textarea>
          </div>
        </div>
        <div className='pane'>
          <h3>JavaScript</h3>
          <div className='code-container'>
            <pre className='line-numbers'>{jsLineNumbers}</pre>
            <textarea
              ref={jsTextareaRef}
              value={js}
              onChange={handleJsChange}
              rows={getLineCount(js)}
            ></textarea>
          </div>
        </div>
      </div>
      <div className='preview'>
        <h3>Preview</h3>
        <iframe
          title='preview'
          srcDoc={`<html>
            <style>${css}</style>
            <body>${html}</body>
            <script>${js}</script>
          </html>`}
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
        ></iframe>
      </div>
    </div>
  );
};

export default Editor;
