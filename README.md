# lambda-local
Lambda local for testing



awslocal lambda create-function \
--function-name handle-sqs \
--runtime nodejs18.x \
--zip-file fileb://function.zip \
--handler index.handler \
--role arn:aws:iam::000000000000:role/lambda-role

awslocal lambda update-function-code \
--function-name handle-sqs \
--zip-file fileb://function.zip 

awslocal lambda create-event-source-mapping --function-name handle-sqs --batch-size 10 \
--event-source-arn arn:aws:sqs:us-east-1:000000000000:localstack-queue



