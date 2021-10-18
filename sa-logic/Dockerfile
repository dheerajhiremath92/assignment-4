FROM python
WORKDIR /app
COPY . .
RUN pip3 install -r requirements.txt && \
python3 -m textblob.download_corpora
EXPOSE 5000
ENTRYPOINT ["python3"]
CMD ["sentiment_analysis.py"]


