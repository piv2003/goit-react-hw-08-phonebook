import { Puff } from 'react-loader-spinner';
import { LoaderBox } from './useLoaders.styled';

export const useLoaders = () => {
  const LoaderBig = () => {
    return (
      <LoaderBox>
        <Puff
          height="150"
          width="150"
          radius={1}
          color="#560bad"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </LoaderBox>
    );
  };

  return { LoaderBig };
};
