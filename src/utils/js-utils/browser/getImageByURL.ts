export function getImageByURL(url: string) {
  return new Promise<{
    base64: string;
    file: File;
    objectURL: string;
  }>((resolve) => {
    (async () => {
      const response = await fetch(url);
      const blob = await response.blob();
      const file = new File([blob], self.crypto.randomUUID(), {
        type: blob.type
      });
      const objectURL = URL.createObjectURL(file);
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          if (typeof reader.result === 'string') {
            const base64 = reader.result;
            resolve({ base64, file, objectURL });
          }
        },
        false
      );
      reader.readAsDataURL(file);
    })();
  });
}
