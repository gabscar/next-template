import { axios } from '@src/lib/axios';

export interface IConstructRequisition<T> {
  url: string;
  constructErrors: (err: unknown) => void;
  constructSuccess?: (value: T) => void;
  setLoading: (value: boolean) => void;
  type: 'post' | 'get' | 'put' | 'patch';
  params?: unknown;
}

export async function ConstructRequisition<T>(props: IConstructRequisition<T>) {
  try {
    props.setLoading(true);
    const response = await axios[props.type](
      props.url,
      props.params ? { ...props.params } : {},
    );
    props.constructSuccess && props.constructSuccess(response.data);
    return response.data;
  } catch (err) {
    props.constructErrors(err);
  } finally {
    props.setLoading(false);
  }
}
