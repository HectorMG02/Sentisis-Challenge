# Sentisis Frontend Challenge

Create app with React and Typescript to:

(ok) - Show a table with a list of objects (tickets/events).

  **Acceptance criteria**:

        (ok) 1- The table has 5 columns: name, type, release date, unit selector and price.

        (ok) 2- The table is sorted by release date (most recent first).

        (ok) 3- The unit selector must be a number type input. The button + (add object) must be on the left side of the selector, and the button - (remove object), on the right side.

        (ok) 4- When hitting the unit selector buttons, the number of objects should get updated.

        (ok) 5- When refreshing, the data are retained (the number of objects ordered is not reset).

(ok) - Show a modal window when clicking each object row.

  **Acceptance criteria**:

        (ok) 1- The modal window shows the name, type and description.

        (ok) 2- Besides the information, it must have an "Add" button, so that when clicking it, the modal closes and the unit selector of the list is increased in 1 unit.

 (ok) - When there is at least one unit of an object, a button "Cart" must be shown under the list.

  **Acceptance criteria**:

        (ok) 1- Show another modal window with the summary of the objects ordered.

        (ok) 2- The summary must contain a list with the object name, number of units and total price.

        (ok) 3- The list is sorted from highest to lowest unit number.

        (ok) 4- The total price must be shown at the end of the list.

        (ok) 5- To exit the modal, it is necessary to click outside the modal.

(ok) - Finally: Add some unit tests and e2e tests to validate the whole process.

> This is the data [endpoint](https://my-json-server.typicode.com/davidan90/demo/tickets).
>
> React is the only mandatory library needed.
>
> Add a README explaining the decisions made and how to run the project.
>
> There is no specific design, feel free to style the app as you want (using css or sass).
>
> Return it at your convenience, we appreciate your time.
