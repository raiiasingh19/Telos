import PropTypes from 'prop-types';

function Painting(props) {

    // decodeBase64(base64data) {
    //     let base64ToString = Buffer.from(base64data, "base64").toString()
    //     this.setState({data: base64ToString })
    // }

    // function _arrayBufferToBase64( buffer ) {
    //     var binary = '';
    //     var bytes = new Uint8Array( buffer );
    //     var len = bytes.byteLength;
    //     for (var i = 0; i < len; i++) {
    //         binary += String.fromCharCode( bytes[ i ] );
    //     }
    //     return window.btoa( binary );
    // }

    // const [imageString, setImageString] = useState("")

    // useEffect(() => {
    //     const string = _arrayBufferToBase64(props.image);
    //     // const startIndex = string.indexOf('base64');
    //     // if (startIndex !== -1) {
    //     //   // Extract the characters after 'base64'
    //     //   const tempString = string.substring(startIndex + 6); // Skip 'base64'
    //       setImageString(string);
    //     // }
    //     console.log(string)
    //   }, [props.image]);




    // const inputString = _arrayBufferToBase64(props.image)
    // const startIndex = inputString.indexOf("base64")
    // if (startIndex !== -1) {
    //     // Extract the characters after '..base64'
    //     const tempString = inputString.substring(startIndex + 1)
    //     setExtractedString(tempString)
    // }
    
    return (
        <div className="painting">
                <h1>{props.title}</h1>
                
                <div className="image"><img src={`../../images/${props.image}`} style={{ width: `${props.width}rem`, height: `${props.height}rem`}} /> </div>
                    <div className="text">
                        <span>{props.dimensions}</span>
                        <span>{props.medium}</span>
                        <p>{props.text}</p>
                    </div>
            </div>   
    )
}

Painting.propTypes = {
    image: PropTypes.string,
    dimensions: PropTypes.string,
    medium: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    
};

export default Painting