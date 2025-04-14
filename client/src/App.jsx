import { PDFDownloadLink, PDFViewer, } from "@react-pdf/renderer";
import ReactPDF from '@react-pdf/renderer';
import Pdf from "./components/pdf/Pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

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
    <Home />

  );
}

export default App;
