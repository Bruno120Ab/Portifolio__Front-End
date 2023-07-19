import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { HiCode } from "react-icons/hi"
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);
  console.log(repositories[1])
  
  const clearNameRepo = (repos:ReposType[]) => {
    const repoList: string[] = []

    repos.forEach( item => {
      const index = item.name.indexOf("_")

      let nameRepo:string = item.name.slice(0, index)

      repoList.push(nameRepo)


    })

    return repoList
  }

  const typeProject = (repos: ReposType[]) => {
    const ListRepositories: string[] = []

    repos.forEach( item => {
      const findUnderscore = item.name.indexOf("_")

      let lastCharacter = item.name.length

      let nameRepo:string = item.name.slice(findUnderscore +2, lastCharacter)

      ListRepositories.push(nameRepo)

    })

    return ListRepositories

  }
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      setRepositories(json);

      return json;
    };

    fetchData();
  }, []);

  return (
    <>
      {repositories &&
        repositories?.map?.((repository,index) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {clearNameRepo(repositories)[index]}              
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Linguagem:
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    Nenhuma linguagem indetificada
                  </Text>
                </ProjectStackTech>
              )}
              
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub /> Github | Projeto {typeProject(repositories)[index]}
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink
                  target="_blank"
                  href={repository.homepage}
                >
                  <FaShare /> Ver Projeto
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
