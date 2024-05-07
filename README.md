# Lab 5 - Starter

zilin liu, A17691286

[expose page](expose.html)

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- no, because it is a large scale and it is hard to decoup a small part from the large application. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

- yes, because this is a much smaller scale test and the answer is small, and we expect it to execute much quicker than compare all letters in the message. 