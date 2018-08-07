import { GetFileNamePipe } from './get-file-name.pipe';

describe('GetFileNamePipe', () => {
  it('create an instance', () => {
    const pipe = new GetFileNamePipe();
    expect(pipe).toBeTruthy();
  });
});
