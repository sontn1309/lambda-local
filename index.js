exports.handler = async (event) => {
    let body = JSON.parse(event.body)

    const response = {
        statusCode: 200,
        body
    };
    console.log('Lambda');
    console.log(response);
    return response;
};

awslocal lambda create-function \
    --function-name handle-sqs \
    --runtime nodejs18.x \
    --zip-file fileb://function.zip \
    --handler index.handler \
    --role arn:aws:iam::000000000000:role/lambda-role

    awslocal lambda create-event-source-mapping --function-name handle-sqs --batch-size 10 \
    --event-source-arn arn:aws:sqs:us-east-1:000000000000:localstack-queue

