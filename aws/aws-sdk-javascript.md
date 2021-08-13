# aws-sdk (JavaScript)

## S3

[docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)

```js
import aws from 'aws-sdk';

const s3 = new aws.S3();
```

###`s3.getObject(params = {}, callback)` 
- [getObject docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property)

Takes `params` and `callback` as arguments. Returns the object specificied in Params 
```
{
  Bucket: <name of bucket> 
  Key: <key of object>
}
```

### `s3.headObject()` 
- [headObject docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#headObject-property)

Retrieves metadata with returning the object itself. 

### `s3.listObjects(params = {}, callback)`
