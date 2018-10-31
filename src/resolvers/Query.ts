import { QueryResolvers } from "../generated/graphqlgen";

export const Query: QueryResolvers.Type = {
  hello: (_, args, { name }) => name
};
