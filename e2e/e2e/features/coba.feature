Priority : High
Given User A has enough balance in IDR
When User A enters a valid IDR amount and a valid TRY account number
Then the transfer is successful

Given User A enters an invalid IDR amount
When User A clicks the "Transfer" button
Then an error message is displayed

Given User A enters an invalid TRY account number
When User A clicks the "Transfer" button
Then an error message is displayed

Given User A's account balance is not enough to cover the transfer amount
When User A clicks the "Transfer" button
Then an error message is displayed

Priority : Low
Given User A has started a transfer
When User A clicks the "Cancel" button
Then the transfer is canceled.

Given User B has received the transferred money in TRY
When User B checks their account balance
Then the transferred amount is displayed

Given There is technical trouble in application during the transfer
When User A tries to check the status of the transfer
Then an error message is displayed.