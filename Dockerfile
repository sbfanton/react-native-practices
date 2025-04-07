# Usa una imagen base más estable (Debian Bullseye)
FROM node:18-bullseye

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Exponer los puertos usados por Expo
EXPOSE 19000 19001 19002 19006 8081

# Comando por defecto: terminal interactiva
CMD ["bash"]