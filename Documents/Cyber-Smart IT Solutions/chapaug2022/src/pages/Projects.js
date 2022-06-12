import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import '../styles/projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <div>
        <Table>
          <caption>Completed Projects</caption>
          <Thead>
            <Tr>
              <Th>S/No</Th>
              <Th>Project Name</Th>
              <Th>Name Of clients</Th>
              <Th>Type of work performed and year of completion</Th>
              <Th>Value of contract awarded</Th>
              <Th>Remark</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>
                Construction of a 33Kv power line and associated LV network in
                western Uganda (Kisoro, and Kanungu Districts) (47km of MV, 69km
                of LV and 24 transformers were installed and commissioned)
              </Td>
              <Td>REA & Main Contractor: China Jiangxi International Ltd</Td>
              <Td>
                <li>Power line Surveying</li>
                <li>
                  Construction and commissioning of both MV and LV Networks.
                </li>
                <li>
                  Generation of As-built Drawings (June 2014 to November, 2015)
                </li>
              </Td>
              <Td>Ugx. 735,334,800</Td>
              <Td>completed</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Re-conductoring of a 33Kv Line in Kapchorwa District</Td>
              <Td>UMEME LTD & Main Contractor: TETRA TECHNICAL SERVICES LTD</Td>
              <Td>
                <li>Re-conductoring from AAAC 50sq.mm to AAAC 150sq.mm </li>
                <li>Pole Replacement </li>
                <li>Transformers injections </li>
                <li>
                  Upgrading LV Network from bare conductors to ABC conductors
                </li>
                <li>
                  Generation of As-Built Drawings (March 2013 to November 2014)
                </li>
              </Td>
              <Td>Ugx. 689,704,600 </Td>
              <Td>completed</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>
                Construction of a 33kv power line and associated network in
                areas of Hoima district (Buliisa-Biso) (86km of MV, 79km of LV
                and 34 transformers were installed and commissioned)
              </Td>
              <Td>REA & Main Contractor: KEC International Ltd</Td>
              <Td>
                <li>Power line Surveying</li>
                <li>
                  Construction and commissioning of both MV and LV Networks.
                </li>
                <li>
                  Generation of As-built Drawings (Feb 2013 to June to 2014)
                </li>
              </Td>
              <Td>USD 380,500</Td>
              <Td>completed</Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>
                Construction of a 33Kv power line and associated LV network for
                the West Nile grid extension, (Procurement Ref:
                UEDCL/WORKS/2013/1080)
              </Td>
              <Td>ATC (Uganda) Ltd & Main Contractor: LTL PROJECTS LTD</Td>
              <Td>
                <li>Power line Surveying,profiling and pegging.</li>
                <li>
                  Supplied power line construction materials (excluding wooden
                  poles and Distribution transformers).
                </li>
                <li>
                  Re-conductoring works from 70sq.mm to 150sq.mm (From Nebbi to
                  Arua)-Rehabilitation works for this line.
                </li>
                <li>
                  Construction of 33kv line from Nyagak dam to Arua sub-station
                  (New Line was constructed)
                </li>
                <li>
                  Generation of As-built drawings and commissioning of
                  constructed MV networks. (May 2014 -Aug 2015)
                </li>
              </Td>
              <Td>USD. 142,129</Td>
              <Td>completed</Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>
                Re-location/ diversion both medium and low voltage lines along
                the various roads in Kampala City Under the contract Ref:
                KCCA/WRKS/1415/00074(Lot 1, Lot2, Lot 3, Lot 4 and Lot 6)
              </Td>
              <Td>
                Stirling Civil Engineering Ltd & Main Contractor: Chapa General
                Enterprises Ltd
              </Td>
              <Td>
                <li>
                  The works done included procurement of line constructions
                  materials such as (50 &100 sq.mm of AAAC, 70 & 50sq.mm of ABC
                  cables, Treated wooden poles, stay assembly materials, line
                  insulators and ABC cable dressing accessories)
                </li>
                <li>
                  Re-Construction of the proposed diversion network to allow for
                  roads expansion (Both Medium and low voltage networks)
                </li>
                <li>
                  Re-installation of Prepaid meters on to the re-constructed
                  networks
                </li>
                <li>
                  Network commissioning Physical Size Re-located 68.5km of MV,
                  214km of LV, 327 pre-paid meters and 77 Distribution
                  Transformers
                </li>
              </Td>
              <Td>US$ 291,252</Td>
              <Td>completed</Td>
            </Tr>
            <Tr>
              <Td>6</Td>
              <Td>
                Construction of 33Kv lines and associated low voltage networks
                in Lot 3 (Procurement ref no: REA/WRKS/14-15/00264)
              </Td>
              <Td>
                REA & Main Contractor: Ceylex Engineering (Private) Limited
              </Td>
              <Td>
                <li>Power line Surveying</li>
                <li>
                  Construction and commissioning of both MV and LV Networks.
                </li>
                <li>Generation of As-built Drawings</li>
              </Td>
              <Td>Ugx. 870,564,500</Td>
              <Td>completed </Td>
            </Tr>
            <Tr>
              <Td>7</Td>
              <Td>
                Grid Densification Project to increase electricity Access in
                Rural and Peri– Urban Areas In Uganda (Procurement ref no:
                REA-KFW/WRKS/1718/00084)
              </Td>
              <Td>REA& Main Contractor: Chapa General Enterprises Ltd</Td>
              <Td>
                <li>
                  Procurement of line construction materials such as wooden
                  poles, AAAC Conductor, Stay assembly materials, meters and
                  ready boards.
                </li>
                <li>
                  Installation of standard wooden poles for LV overhead lines
                </li>
                <li>Installation of LV service Cables</li>
                <li>
                  Installation and commissioning of energy meters and ready
                  boards (April 2019 to May 2021)
                </li>
              </Td>
              <Td>EUR 1,084,531.95</Td>
              <Td>completed</Td>
            </Tr>
            <Tr>
              <Td>8</Td>
              <Td>
                Construction of Low Voltage OFF Grid Power Distribution Networks
                in Various Regions of Uganda Under Lots 1, 2. And 3.
                (Procurement ref no: REA/WRKS/18-19/00174)
              </Td>
              <Td>REA& Main Contractor: Chapa General Enterprises Ltd</Td>
              <Td>
                <li>
                  Surveying, structural spotting and line route profile, Pegging
                  and Bush Clearance
                </li>
                <li>
                  Procurement and delivery to site of LV aerial bundled
                  conductors, treated wooden poles, customer service connection
                  cable and related hardware accessories
                </li>
                <li>
                  Network testing, commissioning and development and submission
                  of as built drawings. (June 2019 to April 2021)
                </li>
              </Td>
              <Td>Ugx.5,776,255,540 </Td>
              <Td>completed</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
      <Table>
        <caption>On-Going Projects</caption>
        <Thead>
          <Tr>
            <Th>S/No</Th>
            <Th>Project Name</Th>
            <Th>Name Of clients</Th>
            <Th>Type of work performed and year of completion</Th>
            <Th>Value of contract awarded</Th>
            <Th>Remark</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>
              Design, Supply and Installation of 33kV Lines and associated Low
              Voltage Networks for Grid Intensification under ERT III (52
              schemes) For Three Lots; Lot 3 Western Service Territory (10
              Schemes). (Procurement ref no: REA-ERTIII/WRKS/1718/00392c)
            </Td>
            <Td>REA& Main Contractor: Chapa General Enterprises Ltd</Td>
            <Td>
              <li>
                Surveying, structural spotting and line route profile, Pegging
                and Bush Clearance
              </li>
              <li>
                Procurement and delivery to site of MV and LV Line hardware,
                Poles, Transformers, switch gear
              </li>
              <li>Construction and installation of Power Lines network</li>
              <li>
                Network testing, commissioning and development and submission of
                as built drawings. (MV = 13.85km, Single Phase = 46.54km, Three
                Phase = 16.89km, 26 Distribution Transformers)
              </li>
            </Td>
            <Td>US$ 716,799.33 And Ugx. 664,141,624.20</Td>
            <Td>On-going</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>
              Design, Supply and Installation of 33kV Lines and associated Low
              Voltage Networks for Grid Intensification under ERT III (52
              schemes) For Three Lots; Lot 2 Rwenzori Service Territory (21
              Schemes). (Procurement ref no: REA-ERTIII/WRKS/1718/00392b)
            </Td>
            <Td>REA& Main Contractor: Chapa General Enterprises Ltds</Td>
            <Td>
              <li>
                Surveying, structural spotting and line route profile, Pegging
                and Bush Clearance
              </li>
              <li>
                Procurement and delivery to site of MV and LV Line hardware,
                Poles, Transformers, switch gear
              </li>
              <li>Construction and Installation of Power Lines network </li>
              <li>
                Network testing, commissioning and development and submission of
                as built drawings. (MV = 29.57km, Single Phase =36.65km, Three
                Phase = 12.69km, 30 Distribution Transformers)
              </li>
            </Td>
            <Td>US$ 797,518.39 And Ugx. 736, 041,348</Td>
            <Td>On-going</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>
              Design, Supply and installation of 11Kv/33Kv Lines and Associated
              Low voltage networks for grid densification Under ERT III (206
              SCHEMES) For 10 Service Territories (STS) Lot 2: Batch 3, Three
              (3STS) (North eastern, eastern and central North) (Procurement ref
              no: REA-ERTIII/WRKS/1920/00096)
            </Td>
            <Td>REA& Main Contractor: Chapa General Enterprises Ltd</Td>
            <Td>
              <li>
                Surveying, structural spotting and line route profile, Pegging
                and Bush Clearance
              </li>
              <li>
                Procurement and delivery to site of MV and LV Line hardware,
                Poles, Transformers, switch gear
              </li>
              <li>Construction and Installation of Power Lines network </li>
              <li>
                Network testing, commissioning and development and submission of
                as built drawings. (MV = 29.57km, Single Phase =36.65km, Three
                Phase = 12.69km, 30 Distribution Transformers)
              </li>
            </Td>
            <Td>US$ 2,077,034.87 And Ugx. 1,845,570,256</Td>
            <Td>On-going</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

export default Projects;
