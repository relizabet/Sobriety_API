# Sobriety_API

## Allowed HTTPs requests:

### <u> `GET`: To get quotes </u>

<b> Get one single random quote </b>
- https://desolate-caverns-92812.herokuapp.com/api/random

<b> Get all quotes </b>
- https://desolate-caverns-92812.herokuapp.com/api/quotes

### <u> `POST`: To submit quotes </u>

<b> Submit a new quote </b>
- https://desolate-caverns-92812.herokuapp.com/api/add-quote

## Server Responses:

- 200 `OK` - request successful
- 201 `CREATED` - quote successfully submitted
- 400 `BAD REQUEST` - request could not be completed

## Example Call:

![Get Request](./public/img/example1.png)

## Built With

- node.js
- express
- cors
- sequelize

## License

[MIT](LICENSE)

## Contributing

To contribute to this project create a branch with the feature or correction then submit a pull request.

## Testing

No tests have been created for this application at this time.

## Contact

Please direct any questions or concerns directly to me via my email address listed below.

- Github: [relizabet](https://github.com/relizabet)
- Email: rachel@relizabeth.com

## Acknowledgements

- [Sample API Documentation](https://pandurangpatil.docs.apiary.io/#introduction/code-sample)