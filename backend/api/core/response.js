exports.onSuccess = (message, result, res) => {
  res.status(200).json({
    Message: message,
    Data: result,
    Status: 200,
    IsSuccess: true
  });
}

exports.onError = (error, res) => {
  res.status(500).json({
    Message: error.message,
    Data: 0,
    Status: 500,
    IsSuccess: false
  });
  res.end();
}
