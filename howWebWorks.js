/* what is HTTP? */

//HTTP stands for Hyper Text Transfer Protocol. It governs how clients send and receive data from a server.

/* what is a URL */

//URL stands for Uniform Resourse Locator and is an address for some internet resource. 

/* what is DNS? */

//DNS stands for Domain Name System, which converts URL's into IP addresses.

/* what is a Query String */

// a query string is part of a URL that assigns values to specified parameters. 

/* what are two HTTP verbs and how are they different? */

// POST - is most-often used to create new resources, or subordinate resources to some other parent resource.
// GET - is used to read or retrieve a representation of a resource. 

/* what is an HTTP request */

//an HTTP request is made, by a client, to a host, which is located on a server. The goal is to access a resource on that server.

/* what is an HTTP response */

// an HTTP response is made by a server to the client. The goal is to provide the client with the resource that was requested.

/* what is an HTTP header? Give a couple examples of request and response headers you have seen. */

// an HTTP header is a field of an HTTP request or response that provides additional context about the request or response.
// Headers- GET, Host, User, Accept
// Response- 200 OK, Connection, Date, Server

/* what are the processes that happen when you type "http://somesite.com/some/page.html" into a browser? */

//after you type the URL and hit enter:
//the Browser looks up the IP address for the domain.
//the Browser makes a request to that IP address, including headers.
//the Server sends a response.
//the Browser makes a DOM from that HTML, and finds any other resources needed.
//the Browser makes separate HTTP requests for those resources and receives response from the server for each.