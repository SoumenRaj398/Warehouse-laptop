import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1) What is the difference between javascript and nodejs ?</Accordion.Header>
          <Accordion.Body>
          Javascript is a <strong> pragramming language</strong> but Node js
              is a <strong> runtime environment </strong> for javacript.
              Javascript can only run in <strong>browser </strong> but with the
              help of node js we can run javascript in <strong> server.</strong>{" "}
              Javascript Mostly Used in <strong> client side</strong> but Node
              js is Mostly Used in <strong> server side. </strong>. Javascript
              is the updated version of <strong>ECMA script</strong> and written
              in c++. but Node js is{" "}
              <strong> written in c,c++,javascript.</strong>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header> 2) When should you use nodejs and when should you use mongodb ?</Accordion.Header>
          <Accordion.Body>
          There is many aspects to use node js .{" "}
              <strong>
                1) when we want to maintain same stack in client and server
                side.
              </strong>{" "}
              <strong>2) when application show real time data.</strong>
              <strong>
                3) when you need to access help of big package manager like npm
              </strong>
            
            
              ** There is many aspects to use mongodb.
              <strong> 1) when your data is Document Oriented </strong>
              <strong>
                {" "}
                2) when you want a good performance and scalability.
              </strong>
              <strong>
                {" "}
                3) when you want a data format in json and no join.
              </strong>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default Blogs;