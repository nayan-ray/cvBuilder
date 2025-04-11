import React from "react";
import {Document, Page, Text, View, } from "@react-pdf/renderer"
import {styles} from "./styles"

const Pdf = () => {
  return (
    <Document pageMode="fullScreen" >
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
