import React from 'react';
import styles from '../styles/Table.css'

const Table = () => {
  return(
  <div className={styles.tableContainer}>
    <table>
    <tr>
      <th className={styles.fakeSiteHeader}>Fakesite</th>
      <th className={styles.accountHeader}>Account</th>
    </tr>
    <tr className={styles.dataContainer}>
      <td className= {styles.fakeSiteData}>About Us</td>
      <td className= {styles.accountData}>Edit Profile</td>
    </tr>
    <tr className={styles.dataContainer}>
      <td className= {styles.fakeSiteData}>Press</td>
      <td className= {styles.accountData}>Friends</td>
    </tr>
    <tr className={styles.dataContainer}>
      <td className= {styles.fakeSiteData}>Policies</td>
      <td className= {styles.accountData}>Social</td>
    </tr>
    <tr className={styles.dataContainer}>
      <td className= {styles.fakeSiteData}>Help</td>
      <td className= {styles.accountData}>Delete Profile</td>
    </tr>
  </table>

</div>
    )
}

export default Table;
