import {React} from "react";


import {FaReact, FaPython, FaGithub, FaHtml5, FaLaravel, FaJava, FaVuejs} from "react-icons/fa";
import {SiFlutter, SiDart, SiHaskell, SiJavascript, SiCss3, SiPhp, SiPhpmyadmin, SiLatex, SiTailwindcss, SiMysql, SiPostgresql, SiSqlite, SiJupyter, SiSpringboot, SiCplusplus, SiFastapi, SiApachesolr} from "react-icons/si";
import {DiProlog} from "react-icons/di";

const Skills = () => {
  const techs = [
    {
      id: 1,
      Icon: FaHtml5,
      title: "HTML",
      style: "shadow-orange-500",
      expertise: "Intermediate"
    },
    {
      id: 2,
      Icon: SiCss3,
      title: "CSS",
      style: "shadow-blue-500",
      expertise:"Intermediate"
    },
    {
      id: 3,
      Icon: SiJavascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      expertise:"Expert"
    },
    {
      id: 4,
      Icon: FaReact,
      title: "React",
      style: "shadow-blue-600",
      expertise:"Beginner"
    },
    {
      id: 5,
      Icon: SiTailwindcss,
      title: "Tailwind",
      style: "shadow-sky-400",
      expertise:"Beginner"
    },
    {
      id: 6,
      Icon: FaPython,
      title: "Python",
      style: "shadow-blue-700",
      expertise:"Intermediate"
    },
    {
      id: 7,
      Icon: SiCplusplus,
      title: "C++",
      style: "shadow-pink-400",
      expertise:"Expert"
    },
    {
      id: 8,
      Icon: FaGithub,
      title: "GitHub",
      style: "shadow-fuchsia-500",
      expertise:"Expert"
    },
    {
      id:9,
      Icon: FaLaravel,
      title:"Laravel",
      style:"shadow-purple-400",
      expertise: "Expert"
    },
    {
      id:10,
      Icon: FaJava,
      title: "Java",
      style: "shadow-yellow-600",
      expertise: "Intermediate"
    },
    {
      id:11,
      Icon: SiFlutter,
      title: "Flutter",
      style: "shadow-red-500",
      expertise: "Intermediate"
    },
    {
      id:12,
      Icon: SiDart,
      title: "Dart",
      style: "shadow-amber-600",
      expertise: "Expert"
    },
    {
      id:13,
      Icon: SiHaskell,
      title: "Haskell",
      style: "shadow-lime-600",
      expertise: "Beginner"
    },
    {
      id:14,
      Icon: DiProlog,
      title: "Prolog",
      style: "shadow-emerald-600",
      expertise: "Beginner"
    },
    {
      id:15,
      Icon: SiPhp,
      title: "Php",
      style: "shadow-green-500",
      expertise: "Intermediate"
    },
    {
      id:16,
      Icon: SiPhpmyadmin,
      title: "Phpmyadmin",
      style: "shadow-cyan-600",
      expertise: "Expert"
    },
    {
      id:17,
      Icon: SiLatex,
      title: "LaTeX",
      style: "shadow-teal-500",
      expertise: "Intermediate"
    },
    {
      id:18,
      Icon: SiMysql,
      title: "MySQL",
      style: "shadow-indigo-600",
      expertise: "Expert"
    },
    {
      id:19,
      Icon: SiPostgresql,
      title: "PostgreSQL",
      style: "shadow-violet-600",
      expertise: "Expert"
    },
    {
      id:20,
      Icon: SiSqlite,
      title: "SQLite",
      style: "shadow-fuchsia-600",
      expertise: "Expert"
    },
    {
      id:21,
      Icon: SiJupyter,
      title: "Jupyter",
      style: "shadow-rose-600",
      expertise: "Intermediate"
    },
    {
      id:22,
      Icon: SiSpringboot,
      title: "Spring Boot",
      style: "shadow-blue-700",
      expertise: "Intermediate"
    },
    {
      id:23,
      Icon: SiFastapi,
      title: "Fastapi",
      style: "shadow-purple-700",
      expertise: "Expert"
    },
    {
      id:24,
      Icon: FaVuejs,
      title: "Vue.js",
      style: "shadow-green-700",
      expertise: "Intermediate"
    },
    {
      id:25,
      Icon: SiApachesolr,
      title: "Solr",
      style: "shadow-yellow-600",
      expertise: "Intermediate"
    }
  ];

  return (
    <div
      name="skills"
      className="w-full h-full mt-14 dark:bg-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-500 dark:text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0" >
          {techs.map(({ id, Icon, title, style, expertise }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`
            }
            >

              <p className="mt-4">{expertise}</p>
              <Icon   fill="purple" font-size="1.5rem" className="w-20 mx-auto" />
              
              <p className="mt-4">{title}</p>
              
            </div>
            

          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
