# Expand
1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)
   - properly named ID's and classes make it easier to target specific element with CSS and js functionality.
2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?
    - Data attributes are custom attributes that can be added to HTML elements to store additional information. They are prefixed with data-, followed by a meaningful name. 
    - can be accessed using dataset; for example, if an element has a data attribute named ```data-id```, you can access its value in JavaScript using ```element.dataset.id```.
    - Microdata is a standardized way of annotating HTML elements with specific attributes to describe their meaning and context, improving optimality.
3. What is a DOM fragment? Why are they powerful?
   - structure that contains a subset of nodes without being attached to the main DOM tree.
   -  they are powerful because they offer performance benefits when working with multiple DOM nodes. Instead of directly manipulating the main DOM tree, which can trigger reflows and repaints, we can manipulate nodes within a fragment and then append the entire fragment to the document in one operation.
4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?
5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?
6. What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?