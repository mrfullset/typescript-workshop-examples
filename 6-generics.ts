//@ts-nocheck

namespace Generics_Basic {
  declare function apiCall<Request, Response>(
    request: Request,
    url: string
  ): Response;

  type UserRequestDTO = {
    id: number;
  };

  type UserResponseDTO = {
    id: number;
    name: string;
    email: string;
  };

  const getUser = (id: number) => {
    return apiCall<UserRequestDTO, UserResponseDTO>({ id }, "/api/user");
  };
}

namespace Generics_Default {
  declare function getValue<T = string>(arg: number): T;
  const value1 = getValue(1);
  const value2 = getValue<number>(2);
}

namespace Generics_Extends {
  type User = {
    id: number;
    name: string;
    email: string;
  };

  type AdminUser = {
    section: string;
  } & User;

  type Message = {
    id: number;
    title: string;
    body: string;
  };

  declare function getUserRole<T extends User>(user: T): string;

  let regularUser!: User;
  let adminUser!: AdminUser;
  let message!: Message;

  const regularRole = getUserRole(regularUser);
  const adminRole = getUserRole(adminUser);

  const messageRole = getUserRole(message);
}
