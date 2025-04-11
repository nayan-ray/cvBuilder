import { PDFDownloadLink, PDFViewer, } from "@react-pdf/renderer";
import ReactPDF from '@react-pdf/renderer';
import Pdf from "./components/pdf/Pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    // <div className=" d-flex">
    //    <div>
    //      hello
    //    </div>
    //   <div className=" w-10" >
    //     <PDFViewer width="100%" height="600px" >
    //       <Pdf />
    //     </PDFViewer>
     
    //   </div>
    //   <div>
    //       <PDFDownloadLink document={<Pdf />} fileName="example.pdf">
    //            Download pdf
    //       </PDFDownloadLink>
    //   </div>
    // </div>
    <div className="">
        <Navbar />
       <div className="d-flex align-items-center">
           <div className="left-app">left</div>
           <div className="middle-app">middle</div>
           <div className="right-app">right</div>
       </div>
    </div>

  );
}

export default App;
