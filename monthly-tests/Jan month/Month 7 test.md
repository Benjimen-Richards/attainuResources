1:- What is the CAP theorem? Differentiate between forward proxy and reverse proxy. -
ans:-CAP theorm is about consitancy,availibility and network partition tolerance.
        ->Consistancy:Any changes like crud operation on data is performed .Same updated data is avaliable to the users at that particular data.It is termed as consistancy
        ->Avaliability:The rate at which the data is available or provided at that particular rate of time to perform operations at that particular time is called as avaliability 
        ->Network partition tolerance:The continuous providing of data even when on network breakdown is called network partition tolerance.
    Proxies mediate all kind of network connections

    Forward Proxy:-
        ->It is basically from the client side 
        ->It is used to bypass a firewall to retrive data from the target 
        ->If a network is blocked than we will connect to forword proxy and get forego the the block with a forward proxy

    Reverse Proxy:-
    ->Reverse proxies are used by the server side of the connections.
    ->This are useful to hide the real time location of the server 
    ->It is a must-have for sites with millions of visitors, because they use many servers.
    ->It is also used for authentication purpose of the client request .
    ->It acts like a gateway to the server.
    ->It can perform cache and decrypt data

2: What is Caching and what are the different types of cache. What are the different ways
to update cache?
ans:Caching is a process to store that kind of data which is mostly used to speed up the cpu processing.The parts of data and programs are transferred from the disk to cache memory by the operating system, from where the CPU can access them.This increases the performance experience of the cpu.It stores data as a temperary data.
    a:-Types:
        ->Web Caching (Browser/Proxy/Gateway),
        ->Data Caching:,
        ->Application/Output Caching,
        ->Distributed Caching 
    b:Updating Cache:
        ->Read-Through Caching
        ->Write-Behind Caching
        ->Refresh-Ahead Caching
3:Differentiate between RPC and REST?
ans:-
    a)Rest:-
        ->REST is all about resources
        ->In REST, the contract is the uniform interface. This uniform interface constraint defines identification and represent of resources, self-description messages (information to describe how to process the message) and hypermedia. 
        ->In REST, the actions are standardized by the uniform interface and so are errors.
        ->REST cache is standard
        ->In rest ,the client should follow the servr side link except a single entry point.But that link client can access difference services
    b)RPC:-
        ->RPC is more about actions.
        ->In RPC,the language is describe on how how client and server understand 
        ->RPC has cache support but it is limited
        ->RPC provide the freedom of knowing the url but once deployed it is restricted to that url 

3:Explain OWASP Top 10 vulnerabilities?
ans:Open Web Application Security Project (OWASP) is a non-profit foundation dedicated to improving the security of software.It is a open commumnity where we can contribute,access the information
    VULNERABILITIES:
        ->Injection:-Due to its community model,untrusted data can to injected into the database and accessing data without authorization
        ->Broken Authentication:Application functions related to authentication and     session management are often implemented incorrectly
        ->Sensitive Data Exposure:sensitive data can be exploited by some hackers easily
        ->Cross-Site Scripting (XSS):- XSS allows attackers to execute scripts in the victim’s browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.
        ->Insufficient Logging & Monitoring: Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems, and tamper, extract, or destroy data. 

5) What is HTTP? Differentiate between HTTP and TCP. Differentiate between GET,
POST, PUT and PATCH?
ANS:HTTP:It stands for HyperText Transfer Protocol.
    it is used to access data on world wide web
    it can be used to transfer data 

    a)Differentiate between HTTP and TCP:
    ->Http:
        -It is a protocol used to transfer data on WWW.
        -it is know for its efficieny to use hypertext environment where there are rapid jumps from one document to another document.
        -it is used to carry the data in the form of MIME-like format
    ->TCP:
        -It is a transport layer protocol that facilitates the transmission of packets from source to destination.
        -it is used to establish the network layer between computing devices in a network
        -It is used with IP protocol
        -it is reliable and maintain the data order
        -it is full duplex
    b)Differentiate between GET,POST, PUT and PATCH:
        ->GET:it is used to fetch the data using url
        ->POST:it is used to post or update a new data in the existing data the data using url
        ->PUT:it is used to make a new data or update a part of the data using url
        ->PATCH:it is used to update a piece of existing data using url

6)Explain How DNS works.?
ans:DNS is converts the given ip data in to computer friendly number
Working:
    -> Each device connected to the internet is assigned a unique IP address which helps other computers identify it
    ->when the url is inputed by the user.DNS converts the url in to machine language and redirects it to the page associated to it .DNS cache comes under usage to speed up the process
    ->if no record is found then query is send to local dns server
    -> if the records are not cached on the resolving nameserver, then the request is forwarded to what’s called a “root nameserver” to locate the DNS records. Root nameservers are designated servers around the world that are responsible for storing DNS data and keeping the system working smoothly. Once the DNS record is found on the root nameserver, it’s cached by your computer.
    ->when the server is found by the DNS it establishes connection to the server to client

7)Explain CDN and HOW it works. Does it use some caching technique?
ans:->A CDN (Content Delivery Network) is a highly-distributed platform of servers that helps minimize delays in loading web page content by reducing the physical distance between the server and the user. 
->CDN ensures the quality of data is uniform between all the users
->CDN plays a major role in handling the network traffic.

WORKING:
    ->when the users tries to acccess a data of europe from london then they wil be delay to retrive the data .
    ->to tackle the delay,CDNs stores a cached version of your website content in multiple geographical locations around the world, which are known as “points of presence” (PoPs)->these PoPs will contain their own caching servers and will be responsible for delivering that content in the user’s location.

8)Differentiate between SQL and NO-SQL database?
ans:
->SQL:
    ->it is structured
    ->It is a database
    ->it contains tables
    ->it contains rows
    ->it contains select option instead of find
    ->it uses insert commond to insert
    ->it uses update commond to update
    ->it uses delete commond to delete
    ->SQL databases are better for multi-row transactions
->NO-SQL:
    ->it is not structured
    ->It is a database
    ->it contains Collections
    ->it contains document
    ->it contains Find option instead of select
    ->it uses Insert commond to insert
    ->it uses update commond to update
    ->it uses Remove commond to delete
    ->NoSQL are better for unstructured data like documents or JSON.

9) Explain Producer-Consumer problem?
ans:Producer-consumer are provided with fixed number of buffer space.
The problem is :
->One producer is used to produce the data and pass it to buffer and one consumer is used to consume the data
->The producer should produce data on when the buffer is not full and in same way consumer should consume data when the buffer is not empty.
->And the both are not allow to do their job at same time.

Solution:
->in order to tackle this the we use three Semaphore variables:
    ->Semaphore S: This semaphore variable is used to achieve mutual exclusion between processes. By using this variable, either Producer or Consumer will be allowed to use or access the shared buffer at a particular time. This variable is set to 1 initially.

    ->Semaphore E: This semaphore variable is used to define the empty space in the buffer. Initially, it is set to the whole space of the buffer i.e. "n" because the buffer is initially empty.

    ->Semaphore F: This semaphore variable is used to define the space that is filled by the producer. Initially, it is set to "0" because there is no space filled by the producer initially.
The above code can be summarized as:
    ->while() is used to produce data continuosly

    ->produce() function is called to produce data by the producer.

    ->wait(E) will reduce the value of the semaphore variable "E" by one i.e. when the producer produces something then there is a decrease in the value of the empty space in the buffer. If the buffer is full i.e. the vale of the semaphore variable "E" is "0", then the program will stop its execution and no production will be done.

    ->wait(S) is used to set the semaphore variable "S" to "0" so that no other process can enter into the critical section.

    ->append() function is used to append the newly produced data in the buffer.

    ->signal(s) is used to set the semaphore variable "S" to "1" so that other processes can come into the critical section now because the production is done and the append operation is also done.

    ->signal(F) is used to increase the semaphore variable "F" by one because after adding the data into the buffer, one space is filled in the buffer and the variable "F" must be updated.

10)Differentiate between normalization and denormalization.?
ans:-Normalization:
        ->Normalization is used to remove redundant data from the database and to store non-redundant and consistent data into it.
        ->it is focused on clearing the unsent data and reduce data inconsistency
        ->due to clearing of data,the number of tables are less 
        ->Memory is optimised and faster in performance

    -Denormalization:
    ->Denormalization is used to combine multiple table data into one so that it can be queried quickly.
    ->it focus on redundancy to execute queries faster .
    ->due to data integration.tables are more in number.
    ->it uses more memory
    ->it does not maintain any data integrity.