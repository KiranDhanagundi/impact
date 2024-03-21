export const AWS_CONFIG_REQUEST = "AWS_CONFIG_REQUEST";
export const AWS_CONFIG_SUCCESS = "AWS_CONFIG_SUCCESS";
export const AWS_CONFIG_FAILURE = "AWS_CONFIG_FAILURE";

export const awsConfigRequest = () => ({
  type: AWS_CONFIG_REQUEST,
});

export const awsConfigSuccess = (payload) => ({
  type: AWS_CONFIG_SUCCESS,
  payload: payload,
});

export const awsConfigFailure = (error) => ({
  type: AWS_CONFIG_FAILURE,
  payload: error,
});
