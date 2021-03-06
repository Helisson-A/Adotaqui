USE [master]
GO
/****** Object:  Database [Adotaqui]    Script Date: 21/11/2021 21:09:08 ******/
CREATE DATABASE [Adotaqui]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Adotaqui', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Adotaqui.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Adotaqui_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Adotaqui_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Adotaqui] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Adotaqui].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Adotaqui] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Adotaqui] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Adotaqui] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Adotaqui] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Adotaqui] SET ARITHABORT OFF 
GO
ALTER DATABASE [Adotaqui] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Adotaqui] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Adotaqui] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Adotaqui] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Adotaqui] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Adotaqui] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Adotaqui] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Adotaqui] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Adotaqui] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Adotaqui] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Adotaqui] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Adotaqui] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Adotaqui] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Adotaqui] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Adotaqui] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Adotaqui] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Adotaqui] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Adotaqui] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Adotaqui] SET  MULTI_USER 
GO
ALTER DATABASE [Adotaqui] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Adotaqui] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Adotaqui] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Adotaqui] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Adotaqui] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Adotaqui] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Adotaqui] SET QUERY_STORE = OFF
GO
USE [Adotaqui]
GO
/****** Object:  Table [dbo].[T_Animais]    Script Date: 21/11/2021 21:09:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[T_Animais](
	[IdAnimal] [int] IDENTITY(1,1) NOT NULL,
	[IdDoador] [int] NULL,
	[NomeAnimal] [varchar](100) NULL,
	[Sexo] [varchar](12) NULL,
	[Idade] [int] NULL,
	[Porte] [varchar](10) NULL,
	[ImagemAnimal] [nvarchar](max) NULL,
	[IdEspecie] [int] NULL,
	[BitCastrado] [bit] NULL,
	[BitVacinado] [bit] NULL,
	[BitVermifugado] [bit] NULL,
	[DescricaoAnimal] [varchar](450) NULL,
	[bitDoado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdAnimal] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[T_Doador]    Script Date: 21/11/2021 21:09:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[T_Doador](
	[IdDoador] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NULL,
	[PontuacaoDoador] [decimal](16, 3) NULL,
	[BitAtivo] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdDoador] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[T_Instituicao]    Script Date: 21/11/2021 21:09:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[T_Instituicao](
	[IdInstit] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NULL,
	[NomeInstit] [varchar](100) NULL,
	[SiteInstit] [varchar](255) NULL,
	[SobreInstit] [varchar](450) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdInstit] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[T_Usuario]    Script Date: 21/11/2021 21:09:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[T_Usuario](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [varchar](100) NULL,
	[DataNasc] [date] NULL,
	[Celular] [varchar](30) NULL,
	[EmailAcesso] [varchar](300) NULL,
	[Senha] [varchar](255) NULL,
	[Numero] [varchar](10) NULL,
	[Bairro] [varchar](50) NULL,
	[Cidade] [varchar](255) NULL,
	[Complemento] [varchar](255) NULL,
	[BitInstit] [bit] NULL,
	[BitAtivo] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[T_Animais] ON 

INSERT [dbo].[T_Animais] ([IdAnimal], [IdDoador], [NomeAnimal], [Sexo], [Idade], [Porte], [ImagemAnimal], [IdEspecie], [BitCastrado], [BitVacinado], [BitVermifugado], [DescricaoAnimal], [bitDoado]) VALUES (1, 1, N'Luan', N'MACHO', 45, N'Pequeno', NULL, 1, 0, 0, 0, NULL, 0)
SET IDENTITY_INSERT [dbo].[T_Animais] OFF
GO
SET IDENTITY_INSERT [dbo].[T_Instituicao] ON 

INSERT [dbo].[T_Instituicao] ([IdInstit], [IdUsuario], [NomeInstit], [SiteInstit], [SobreInstit]) VALUES (1, 12, N'Teste', N'Teste', N'Teste')
SET IDENTITY_INSERT [dbo].[T_Instituicao] OFF
GO
SET IDENTITY_INSERT [dbo].[T_Usuario] ON 

INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (1, N'Teste', CAST(N'2021-11-21' AS Date), N'19989255452', N'teste@teste.com.br', N'teste123', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (2, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (3, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (4, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (5, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (6, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (7, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (8, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (9, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (10, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (11, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (12, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
INSERT [dbo].[T_Usuario] ([IdUsuario], [Nome], [DataNasc], [Celular], [EmailAcesso], [Senha], [Numero], [Bairro], [Cidade], [Complemento], [BitInstit], [BitAtivo]) VALUES (13, N'Adm', CAST(N'2021-11-21' AS Date), N'19989255452', N'adm@adm.com.br', N'adm123!', NULL, NULL, N'Hortolândia', NULL, 0, 1)
SET IDENTITY_INSERT [dbo].[T_Usuario] OFF
GO
ALTER TABLE [dbo].[T_Animais] ADD  DEFAULT ((0)) FOR [BitCastrado]
GO
ALTER TABLE [dbo].[T_Animais] ADD  DEFAULT ((0)) FOR [BitVacinado]
GO
ALTER TABLE [dbo].[T_Animais] ADD  DEFAULT ((0)) FOR [BitVermifugado]
GO
ALTER TABLE [dbo].[T_Animais] ADD  DEFAULT ((0)) FOR [bitDoado]
GO
ALTER TABLE [dbo].[T_Doador] ADD  DEFAULT ((1)) FOR [BitAtivo]
GO
ALTER TABLE [dbo].[T_Usuario] ADD  DEFAULT ((0)) FOR [BitInstit]
GO
ALTER TABLE [dbo].[T_Usuario] ADD  DEFAULT ((1)) FOR [BitAtivo]
GO
USE [master]
GO
ALTER DATABASE [Adotaqui] SET  READ_WRITE 
GO
