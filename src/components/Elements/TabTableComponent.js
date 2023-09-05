import { Table } from "reactstrap";

const TabTableComponent = () => {
  return (
    <Table borderless className="mb-0 ">
      <tbody>
        <tr>
          <th scope="row">Domain:</th>
          <td>adobe.com</td>
        </tr>
        <tr>
          <th scope="row">Registrar:</th>
          <td>Nom-iq Ltd. dba COM LAUDE</td>
        </tr>
        <tr>
          <th scope="row">Registered On:</th>
          <td>1986-11-17</td>
        </tr>
        <tr>
          <th scope="row">Expires On:</th>
          <td>2022-05-17</td>
        </tr>
        <tr>
          <th scope="row">Updated On:</th>
          <td>2021-04-17</td>
        </tr>
        <tr>
          <th scope="row">Status:</th>
          <td>
            clientUpdateProhibited <br />
            serverDeleteProhibited
            <br />
            serverTransferProhibited
            <br />
            serverUpdateProhibited
            <br />
          </td>
        </tr>
        <tr>
          <th scope="row">Name Servers:</th>
          <td>
            a1-217.akam.net
            <br />
            a10-64.akam.net
            <br />
            a13-65.akam.net
            <br />
            a26-66.akam.net
            <br />
            a28-67.akam.net
            <br />
            a7-64.akam.net
            <br />
            adobe-dns-01.adobe.com
            <br />
            adobe-dns-03.adobe.com
            <br />
            adobe-dns-04.adobe.com
            <br />
            adobe-dns-05.adobe.com
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TabTableComponent;
