import React from "react";
import styles from "./FirstPage.module.css"
import Header from "../../components/header/header";
import NavigationForProjects from "../../components/NavigationForProjects/NavigationForProjects";

function FirstPage() {
  return(
      <div className={styles.container}>
        <Header></Header>
        <NavigationForProjects></NavigationForProjects>
      </div>
  )
}

export default FirstPage