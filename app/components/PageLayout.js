
const PageLayout = function (props) {
  
  return (
    <div>
      {/* <div className='py-0 px-8'></div> */}
      <style jsx global>{`
            html {
              box-sizing: border-box;
            }
        
            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }
        
            body {
              margin: 0;
              padding: 0;
              font-size: 16px;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
                "Segoe UI Symbol";
              background: rgba(0, 0, 0, 0.05);
            }
        
            input,
            textarea {
              font-size: 16px;
            }
        
            button {
              cursor: pointer;
            }
        `}</style>
    </div>
  )
}

export default PageLayout;