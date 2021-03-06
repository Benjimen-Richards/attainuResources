1)What is ARP ? Explain in brief?
ans:-
a)
->Address Resolution Protocol (ARP) is a protocol or procedure that connects an ever-changing Internet Protocol (IP) address to a fixed physical machine address, also known as a media access control (MAC) address, in a local-area network (LAN).
->This mapping procedure is important because the lengths of the IP and MAC addresses differ, and a translation is needed so that the systems can recognize one another. The most used IP today is IP version 4 (IPv4). An IP address is 32 bits long. However, MAC addresses are 48 bits long. ARP translates the 32-bit address to 48 and vice versa.
-> Open Systems Interconnection (OSI) model uses layers to give IT teams a visualization of what is going on with a particular networking system.

b)
Working:-
->When a new computer joins a LAN, it is assigned a unique IP address to use for identification and communication.
->Packets of data arrive at a gateway, destined for a particular host machine. The gateway, or the piece of hardware on a network that allows data to flow from one network to another, asks the ARP program to find a MAC address that matches the IP address. The ARP cache keeps a record of each IP address and its matching MAC address. The ARP cache is dynamic, but users on a network can also configure a static ARP table containing IP addresses and MAC addresses.
->ARP caches are kept on all operating systems in an IPv4 Ethernet network. Every time a device requests a MAC address to send data to another device connected to the LAN, the device verifies its ARP cache and sents it from cache if exists or else it fetches again

c)types:-
->Proxy ARP
->Gratuitous ARP
->Reverse ARP (RARP)
->Inverse ARP (IARP)

2)What is NAT ? Explain in brief?
ans:-
a)
->Network Address Translation (NAT) is designed for IP address conservation. It enables private IP networks that use unregistered IP addresses to connect to the Internet. NAT operates on a router, usually connecting two networks together, and translates the private (not globally unique) addresses in the internal network into legal addresses, before packets are forwarded to another network.
->Nat can be limited to advertise only one address for the entire network to the outside world.this provides security by effectively provides privacy to the data

b)
->NAT allows a single device, such as a router, to act as an agent between the Internet (or public network) and a local network (or private network), which means that only a single unique IP address is required to represent an entire group of computers to anything outside their network.
->In order to configure traditional NAT, you need to make at least one interface on a router (NAT outside) and another interface on the router (NAT inside) and a set of rules for translating the IP addresses in the packet headers (and payloads if desired) need to be configured
->Nat can be used to deploy as public wireless environment

3)What is Private IP Address?
ans:-
->Private id is a address url which is provided by the company of manufacture where every model of router contains same ip address and it is set to default
-> Private IP Address is like a passport to the Internet.
->Once the router makes connection with the internet provider it follows steps using NAT->
----->a)NAT is a process in which your router changes your private IP Address into a public one so that it can send your traffic over the Internet, keeping track of the changes in the process.
--------->b)When the information comes back to your router, it reverses the change—from a real IP address into a private one—and forwards the traffic back to your computer.

->these private addresses are known as non-routable addresses. The networking on the Internet routes Internet activity connected to your public IP address only, not your private IP.

->Private IP addresses are untracked and unrestricted.

4. Explain conditions for Deadlock?
   ans)
   ->Deadlock is a situation which involves the interaction of more than one resources and processes with each other.where one is dependent on other for data but no one is willing to pass first

   ->Conditions are->
   a)Mutual Exclusion:When two people meet in the landings, they can’t just walk through because there is space only for one person. This condition to allow only one person (or process) to use the step between them (or the resource) is the first condition necessary for the occurrence of the deadlock.

   b)Hold and Wait:When the 2 people refuses to retreat and hold their grounds, it is called holding. This is the next necessary condition for the the deadlock.

   c)No Preemption:For resolving the deadlock one can simply cancel one of the processes for other to continue. But Operating System doesn’t do so. It allocates the resources to the processors for as much time needed until the task is completed. Hence, there is no temporary reallocation of the resources. It is third condition for deadlock.

   d)Circular Wait:When the two people refuses to retreat and wait for each other to retreat, so that they can complete their task, it is called circular wait. It is the last condition for the deadlock to occur.

5)Explain Swap Memory?
ans)->
->Memory swapping is a computer technology that enables an operating system to provide more memory to a running application or process than is available in physical random access memory (RAM). When the physical system memory is exhausted, the operating system can opt to make use of memory swapping techniques to get additional memory.
->When they is a shortage of memory in ram. this technilogy is used to make the ends work

Benefits:-
a) this additional memory enables the computer to run faster and crunch data better. (For more background, see Memory vs. Storage.
b)With memory swapping, the operating system makes use of storage disk space to provide the functional equivalent of memory storage execution space.
c)With memory swapping, the operating system makes use of storage disk space to provide the functional equivalent of memory storage execution space.
d)It is initiated when needed as physical RAM is used and additional capacity is required by processes and applications. As additional RAM is required,
e)More Memory: Memory swapping is a critical component of memory management, enabling an operating system to handle requests that would otherwise overwhelm a system.
f)Continuous Operations: Swap file memory can be written to disk in a continuous manner, enabling faster lookup times for operations.
g)System Optimization: Application processes of lesser importance and demand can be relegated to swap space, saving the higher performance physical memory for higher value operations.

7. Explain Consistent Hashing in brief?
   ans:-
   ->A distributed system is a network that consists of autonomous computers that are connected using a distribution middleware. They help in sharing different resources and capabilities to provide users with a single and integrated coherent network.
   ->The hash function can be defined as node_number = hash(key)mod_N where N is the number of Nodes.
   ->To add/retrieve a key to/from the node, the client computes the hash value of that key and uses the result to contact the appropriate node by looking up its IP address. If the key is found, it is retrieved else it is added to the pool of the Node.

   Disadvantage:
   ->Rehashing:When number of nodes increase.every element is rehashed with new keys

Consitent Hashing:-
->This method operates independently of the number of nodes as the hash function is not dependent on the number of nodes. Here we assume a chain/ring is formed and we place the keys as well as the nodes on the ring and distribute them.
The hash value can be computed as position_on_chain = hash(key)mod_360

->Steps for the arrangement –

1. Find Hash values of the keys and place it on the ring according to the hash value.
2. Find Hash values of the individual nodes and place it on the ring according to the hash value.
3. Now map each key with the node which is closest to it in the counter-clockwise direction.
4. If the position of a node and key is same, assign that key to the node.
   So, now to locate a node, we will just traverse the ring from the point of the position of the key till we find a node in the counter-clockwise direction.

8)Explain what happens when you type www.attainu.com in the web browser.?
->Browser checks cache for DNS entry to find the corresponding IP address of website.It looks for following cache. If not found in one, then continues checking to the next until found.
Browser Cache
Operating Systems Cache
Router Cache
ISP Cache
->If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of server that hosts the domain name.
The requests are sent using small data packets that contain information content of request and IP address it is destined for.
->The browser sends a HTTP request to the server
->Then the server sends back a HTTP response
->Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.
->Then browser begins rendering the HTML
->The browser sends requests for additional objects embedded in HTML (images, css, JavaScript) and repeats steps 3-5.
->Once the page is loaded, the browser sends further async requests as needed.

9)What is Context Switching ? Explain in brief?
ans)
->Context Switching involves storing the context or state of a process so that it can be reloaded when required and execution can be resumed from the same point as earlier. This is a feature of a multitasking operating system and allows a single CPU to be shared by multiple processes.

->Context Switching Triggers
->There are three major triggers for context switching. These are given as follows −

a)Multitasking: In a multitasking environment, a process is switched out of the CPU so another process can be run. The state of the old process is saved and the state of the new process is loaded. On a pre-emptive system, processes may be switched out by the scheduler.

b)Interrupt Handling: The hardware switches a part of the context when an interrupt occurs. This happens automatically. Only some of the context is changed to minimize the time required to handle the interrupt.

c)User and Kernel Mode Switching: A context switch may take place when a transition between the user mode and kernel mode is required in the operating system.

->Contex switching cost:Context Switching leads to an overhead cost because of TLB flushes, sharing the cache between multiple tasks, running the task scheduler etc. Context switching between two threads of the same process is faster than between two different processes as threads have the same virtual memory maps. Because of this TLB flushing is not required.

steps->
The steps involved in context switching are as follows −

->Save the context of the process that is currently running on the CPU. Update the process control block and other important fields.
->Move the process control block of the above process into the relevant queue such as the ready queue, I/O queue etc.
->Select a new process for execution.
->Update the process control block of the selected process. This includes updating the process state to running.
->Update the memory management data structures as required.
->Restore the context of the process that was previously running when it is loaded again on the processor. This is done by loading the previous values of the process control block and registers.

10): Explain all the layers TCP/IP model with example.?
ans->
Layes:
a)Process/Application Layer
b)Host-to-Host/Transport Layer
c)Internet Layer
d)Network Access/Link Layer

1. Network Access Layer –This layer corresponds to the combination of Data Link Layer and Physical Layer of the OSI model. It looks out for hardware addressing and the protocols present in this layer allows for the physical transmission of data.
   We just talked about ARP being a protocol of Internet layer, but there is a conflict about declaring it as a protocol of Internet Layer or Network access layer. It is described as residing in layer 3, being encapsulated by layer 2 protocols.
2. Internet Layer –
   This layer parallels the functions of OSI’s Network layer. It defines the protocols which are responsible for logical transmission of data over the entire network. The main protocols residing at this layer are :
   ->IP -->IPV4,IPV6
   ->ICMP – stands for Internet Control Message Protocol.
   ->ARP – stands for Address Resolution Protocol.

3.Host-to-Host Layer –
This layer is analogous to the transport layer of the OSI model. It is responsible for end-to-end communication and error-free delivery of data. It shields the upper-layer applications from the complexities of data. The two main protocols present in this layer are :
->Transmission Control Protocol (TCP) – It is known to provide reliable and error-free communication between end systems. It performs sequencing and segmentation of data.
->User Datagram Protocol (UDP) – On the other hand does not provide any such features. It is the go-to protocol if your application does not require reliable transport as it is very cost-effective. Unlike TCP, which is connection-oriented protocol, UDP is connectionless.

4. Application Layer –
   This layer performs the functions of top three layers of the OSI model: Application, Presentation and Session Layer. It is responsible for node-to-node communication and controls user-interface specifications. Some of the protocols present in this layer are: HTTP, HTTPS, FTP, TFTP, Telnet, SSH, SMTP, SNMP, NTP, DNS, DHCP, NFS, X Window, LPD. Have a look at Protocols in Application Layer for some information about these protocols. Protocols other than those present in the linked article are :
   1->HTTP and HTTPS – HTTP stands for Hypertext transfer protocol.
   2->SSH – SSH stands for Secure Shell.
   3->NTP – NTP stands for Network Time Protocol.

6)For the given cache of size 3 and below inputs tell
the cache HIT rate .
5 4 3 2 1 3 5 6 7 8 10 15?
ans:-
=>To calculate a hit ratio, divide the number of cache hits with the sum of the number of cache hits, and the number of cache misses.
calculation=>formula=(cache hit/cache miss + cache hit )\*100
->5=71%
->4=57%
->3=50%
->2=40%
->1=25%
->3=50%
->5 =71%
->6=66%
->7=70%
->8=72%
->10=76%
->15=83%
